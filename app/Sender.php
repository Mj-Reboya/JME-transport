<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sender extends Model
{
  //
  protected $fillable = [
    'name', 'booking_date', 'company', 'street_address', 'suburd', 'state', 'post_code', 'phone_number', 'transaction_id'
  ];

  public function transaction()
  {
    return $this->belongsTo(Transaction::class);
  }
}
