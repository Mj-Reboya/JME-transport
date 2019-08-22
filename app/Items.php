<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Items extends Model
{
  //
  protected $fillable = [
    'description', 'commodity', 'items', 'total_weight', 'length', 'width', 'height'
  ];

  public function pickupDetails()
  {
    return $this->belongsTo(PickupDetails::class);
  }
}
