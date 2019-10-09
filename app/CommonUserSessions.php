<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CommonUserSessions extends Model
{
  public $timestamps = true;
  protected $fillable = [
    'common_user_id', 'session_hash'
  ];
  public function common_user()
  {
    return CommonUser::where('id', $this->common_user_id)->first();
  }
  public function generateSession()
  {
    $this->session_hash = bcrypt(uniqid());
  }
  public static function searchUser(CommonUser $user)
  {
    return CommonUserSessions::where('common_user_id', $user->id)->first();
  }
  public static function getUserBySession(string $sessionToken)
  {
    return CommonUserSessions::where('session_hash', $sessionToken)->first();
  }
}
