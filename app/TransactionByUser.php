<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TransactionByUser extends Model
{
  protected $fillable = [
    'transaction_id', 'common_user_id'
  ];
  public function transaction()
  {
    return Transaction::where('id', $this->transaction_id)->first();
  }
  public function commonUser()
  {
    return CommonUser::where('id', $this->common_user_id)->first();
  }
}
