<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
  //
  protected $fillable = ['transaction_hash', 'sender_id', 'payor_id', 'receiver_id', 'pickup_details_id'];


  public function sender()
  {
    return $this->hasOne(Sender::class);
  }

  public function receiver()
  {
    return $this->hasOne(Receiver::class);
  }

  public function payor()
  {
    return $this->hasOne(Payor::class);
  }

  public function pickupDetails()
  {
    return $this->hasOne(PickupDetails::class);
  }
}
