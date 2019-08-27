<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
  //
  protected $fillable = [
    'name', 'booking_date', 'company', 'street_address', 'suburd', 'state', 'post_code', 'phone_number', 'details_id'
  ];

  public function details()
  {
    return $this->morphTo();
  }
}
