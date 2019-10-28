<?php

use Illuminate\Http\Request;
use PHPJasper\PHPJasper as PHPJasper;
use App\Transaction;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
  return $request->user();
});

Route::resources([
  'transaction' => 'TransactionCreatorController'
]);

Route::resources([
  'commonUser' => 'CommonUserController'
]);

// revokeToken

Route::post('commonUserSession/revoke', 'CommonUserSessionsController@revokeToken');
Route::resources([
  'commonUserSession' => 'CommonUserSessionsController'
]);

Route::get('/generate-pdf/{pdf_name}', function ($pdf_name, Request $request) {
  $transaction_id = $request->query('transaction_id');
  if (!isset($transaction_id)) {
    return response()->json([
      'message' => 'requires transaction_id, pdf_name parameters',
      'transaction_id' => $transaction_id,
      'pdf_name' => $pdf_name,
    ], 403);
  }

  $transction_exist = Transaction::where('id', '=', $transaction_id)->first();
  if ($transction_exist == null) {
    return response()->json([
      'message' => 'cannot generate pdfs for unknown Transaction id'
    ], 403);
  }


  $available_pdf = ['proof-of-delivery', 'pdf-2', 'pickup-manifest'];
  if (!in_array($pdf_name, $available_pdf)) {
    return response()->json([
      'message' => "$pdf_name is not available for generating"
    ], 403);
  }

  $db_conf = [
    'driver' => 'mysql',
    'username' => env('DB_USERNAME', 'root'),
    // enclose password with double quote since it have an illegal character
    'password' =>  '"' . env('DB_PASSWORD', '') . '"',
    'host' => env('DB_HOST', '127.0.0.1'),
    'database' =>  env('DB_DATABASE', 'jme'),
    'port' => env('DB_PORT', '3306'),
  ];
  $options = [
    'format' => ['pdf'],
  ];
  $params = [
    'transaction_id' => $transaction_id
  ];

  $input =  __DIR__ . "/../app/Reports/$pdf_name.jasper";
  $output = env('PDF_TMP_FOLDER', __DIR__ . '/../app/Reports/temp/') . $transaction_id;
  if (!file_exists($output . '/')) {
    // echo ($output);
    File::makeDirectory($output, 0777, true);
  }

  $out_name = $pdf_name;
  if ($pdf_name == 'pdf-2') {
    $out_name = 'barcode';
  }

  if (file_exists($output . "/$pdf_name.pdf")) {
    return response()->download($output . "/$pdf_name.pdf", $out_name . uniqid('_jme_') . $transaction_id . '.pdf', [
      'code' => 400
    ]);
  }

  $options['db_connection'] = $db_conf;
  $options['params'] = $params;
  $jasper = new PHPJasper;

  $out = $jasper->process(
    $input,
    $output,
    $options
  )->output();
  try {
    $jasper->process(
      $input,
      $output,
      $options
    )->execute();
    return response()->download($output . "/$pdf_name.pdf", $out_name . uniqid('_jme_') . $transaction_id . '.pdf', [
      'code' => 400
    ]);
  } catch (\Throwable $th) {
    return response()->json([
      'message' => $out,
      'output' => $output
    ], 500);
  }
});

Route::redirect('/login', '/#/login');
Route::redirect('/sign-up', '/#/sign-up');
Route::redirect('/orderForm', '/#/orderForm');
