<?php

namespace App\Http\Controllers;

use App\Customer;
use App\Items;
use App\Payor;
use App\PickupDetails;
use App\Receiver;
use App\Sender;
use App\Transaction;
use App\CommonUserSessions;
use App\TransactionByUser;
use Illuminate\Http\Request;

class TransactionCreatorController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index(Request $request)
  {
    //
    $transaction = Transaction::where('id', $request->query('id'))->take(1)->get();
    return response()->json([
      'id' => $transaction->id,
      'sender' => $transaction->sender,
      'receiver' => $transaction->receiver,
      'payor' => $transaction->sender,
      'pickupDetails' => $transaction->pickupDetails
    ]);
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    $header = $request->header('Authorization');
    $session = CommonUserSessions::getUserBySession($header);
    if (!isset($session)) {
      return response()->json([
        'message' => 'invalid Session token',
        'usedToken' => $header
      ], 404);
    }

    if (!$request->isJson()) {
      return response()->json([
        'message' => 'only accepts JSON Request type'
      ], 403);
    }
    $data = $request->json()->all();
    $senderReq        = $data['sender'];
    $payorReq         = $data['payor'];
    $receiverReq      = $data['receiver'];
    $pickupDetailsReq = $data['delivery'];

    $senderCust   = $this->createCustomer($senderReq, 'sender');
    $payorCust    = $this->createCustomer($payorReq, 'payor');
    $receiverCust = $this->createCustomer($receiverReq, 'receiver');

    $pickupDetails = new PickupDetails([
      'parcel_type'         => $pickupDetailsReq['parcelType'],
      'special_instruction' => isset($pickupDetailsReq['specialInstruction']) ? $pickupDetailsReq['specialInstruction'] : '',
      'option'              => $pickupDetailsReq['pickUpOption'],
      'pickup_date'         => date('Y-m-d', strtotime($pickupDetailsReq['pickUpDate'])),
      'ready_at'            => date('H:i:s', strtotime($pickupDetailsReq['pickUpReadyAt'])),
      'closing_time'        => date('H:i:s', strtotime($pickupDetailsReq['closingTime']))
    ]);

    $transaction = new Transaction(['transaction_hash' => uniqid('jme_')]);
    $transaction->save();
    $senderCust->save();
    $payorCust->save();
    $receiverCust->save();
    $pickupDetails->save();

    $items = $pickupDetailsReq['deliveryItems'];
    foreach ($items as $key => $item) {
      $newItem = new Items([
        'description'  => $item['description'],
        'commodity'    => $item['commodity'],
        'items'        => (int) $item['items'],
        'total_weight' => (int) $item['totalWeight'],
        'length'       => (int) $item['length'],
        'width'        => (int) $item['width'],
        'height'       => (int) $item['height']
      ]);
      $newItem->save();
      $newItem->pickupDetails()->associate($pickupDetails)->save();
      $pickupDetailsItem[] = $newItem;
    }

    $senderCust->transaction()->associate($transaction)->save();
    $payorCust->transaction()->associate($transaction)->save();
    $receiverCust->transaction()->associate($transaction)->save();
    $pickupDetails->transaction()->associate($transaction)->save();

    $transaction->sender()->save($senderCust);
    $transaction->receiver()->save($senderCust);
    $transaction->payor()->save($senderCust);
    $transaction->pickupDetails()->save($senderCust);

    $user = $session->common_user();

    $transactionByUser = new TransactionByUser([
      'transaction_id' => $transaction->id, 'common_user_id' => $user->id
    ]);

    $transactionByUser->save();

    return response()->json([
      'requestId' => $transaction->id
    ]);
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Transaction  $transaction
   * @return \Illuminate\Http\Response
   */
  public function show(Transaction $transaction)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\Transaction  $transaction
   * @return \Illuminate\Http\Response
   */
  public function edit(Transaction $transaction)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Transaction  $transaction
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Transaction $transaction)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Transaction  $transaction
   * @return \Illuminate\Http\Response
   */
  public function destroy(Transaction $transaction)
  {
    //
  }

  private function createCustomer($data, $class)
  {
    $fields = [
      'name'            => $data['name'],
      'booking_date'    => date('Y-m-d', strtotime($data['bookingDate'])),
      'company'         => $data['company'],
      'street_address'  => $data['streetAddress'],
      'suburd'          => $data['suburd'],
      'state'           => $data['state'],
      'post_code'       => $data['postCode'],
      'phone_number'    => $data['phone']
    ];
    switch ($class) {
      case 'sender':
        return new Sender($fields);

      case 'payor':
        return new Payor($fields);

      case 'receiver':
        return new Receiver($fields);

      default:
        return new Sender($fields);
    }
  }
}
