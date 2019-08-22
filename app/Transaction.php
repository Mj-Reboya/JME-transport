<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
  //
  protected $fillable = [
    'sender', 'payor', 'receiver', 'pickup_details'
  ];

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
