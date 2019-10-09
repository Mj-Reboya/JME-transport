<?php

namespace App\Http\Controllers;

use App\CommonUser;
use Illuminate\Http\Request;

class CommonUserController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    //
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    if (!$request->isJson()) {
      return response()->json([
        'message' => 'only accepts JSON Request type'
      ], 403);
    }
    $params = $request->json()->all();
    $firstname = $params['firstname'];
    $lastname = $params['lastname'];
    $company = $params['company'];
    $email = $params['email'];
    $username = $params['username'];
    $password = $params['password'];

    $duplicateEmail = CommonUser::where('email', $email)->first();
    if (isset($duplicateEmail)) {
      return response()->json([
        'message' => 'email already used by another account'
      ]);
    }

    $duplicateUsername = CommonUser::where('username', $username)->first();
    if (isset($duplicateUsername)) {
      return response()->json([
        'message' => 'username already exist'
      ]);
    }

    $new_user = new CommonUser([
      'firstname' => $firstname,
      'lastname' => $lastname,
      'company' => $company,
      'email' => $email,
      'username' => $username,
      'password' => bcrypt($password)
    ]);
    try {
      $new_user->save();
    } catch (\Throwable $th) {
      echo $th;
    }

    return response()->json([
      'status' => $params
    ]);
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\CommonUser  $commonUser
   * @return \Illuminate\Http\Response
   */
  public function show(CommonUser $commonUser)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\CommonUser  $commonUser
   * @return \Illuminate\Http\Response
   */
  public function edit(CommonUser $commonUser)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\CommonUser  $commonUser
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, CommonUser $commonUser)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\CommonUser  $commonUser
   * @return \Illuminate\Http\Response
   */
  public function destroy(CommonUser $commonUser)
  {
    //
  }
}
