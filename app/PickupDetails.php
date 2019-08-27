<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class PickupDetails extends Model
{
  //
  protected $fillable = [
    'parcel_type', 'option', 'pickup_date', 'ready_at', 'closing_time', 'special_instruction', 'transaction_id'
  ];

  public function items()
  {
    return $this->hasMany(Items::class);
  }

  public function transaction()
  {
    return $this->belongsTo(Transaction::class);
  }
}
