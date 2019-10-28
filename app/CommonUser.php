<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\CommonUserSessions;

class CommonUser extends Model
{
  public $timestamps = false;
  //
  protected $fillable = [
    'firstname', 'lastname', 'company', 'email', 'username', 'password', 'role'
  ];

  public static function searchUser(string $u, string $pass)
  {
    $user =  CommonUser::where('username', $u)->first();
    if (!isset($user)) {
      return null;
    }
    $verifyPassword = Hash::check($pass, $user->password);
    if (!$verifyPassword) {
      return null;
    }
    return $user;
  }
}
