<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Receiver extends Model
{
  //
  protected $fillable = [
    'name', 'company', 'street_address', 'suburb', 'state', 'post_code', 'phone_number'
  ];

  public function transaction()
  {
    return $this->belongsTo(Transaction::class);
  }
}
