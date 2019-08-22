<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
  //
  protected $fillable = [
    'name', 'company', 'street_address', 'suburb', 'state', 'post_code', 'phone_number'
  ];
}
