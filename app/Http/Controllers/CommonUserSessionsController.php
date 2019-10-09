<?php

namespace App\Http\Controllers;

use App\CommonUser;
use App\CommonUserSessions;
use Illuminate\Http\Request;
use App\Http\Controllers\util\VerifyCommonUser;
use Illuminate\Support\Facades\Hash;
// include_once App\Http\Controllers\util\VerifyCommonUser;

class CommonUserSessionsController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index(Request $request)
  {
    //
    $header = $request->header('Authorization');
    $session = CommonUserSessions::getUserBySession($header);
    if (!isset($session)) {
      return response()->json([
        'message' => 'invalid Session token',
        'usedToken' => $header
      ], 404);
    }
    return response()->json([
      'message' => 'session exist',
      'usedToken' => $header
    ], 200);
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
    $u = $params['username'];
    $p = $params['password'];
    if (!isset($u) || !isset($p)) {
      return response()->json([
        'message' => 'required parameters not fulfilled'
      ], 409);
    }

    try {
      // search username and verify
      $search_result =  CommonUser::where('username', $u)->first();
      if (!isset($search_result)) {
        return response()->json([
          'message' => 'username does not exist'
        ], 404);
      }
      $verifyPassword = Hash::check($p, $search_result->password);
      if (!$verifyPassword) {
        return response()->json([
          'message' => 'invalid password'
        ], 409);
      }

      $userSession = CommonUserSessions::searchUser($search_result);
      if (!isset($userSession)) {
        $userSession = new CommonUserSessions(
          ['common_user_id' => $search_result->id]
        );
      }

      $userSession->generateSession();
      $userSession->save();

      return response()->json([
        'message' => 'new session token generated',
        'session_token' => $userSession->session_hash
      ]);
    } catch (\Throwable $th) {
      return response()->json([
        'message' => $th->getMessage()
      ], 500);
    }
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\CommonUserSessions  $commonUserSessions
   * @return \Illuminate\Http\Response
   */
  public function show(CommonUserSessions $commonUserSessions)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\CommonUserSessions  $commonUserSessions
   * @return \Illuminate\Http\Response
   */
  public function edit(CommonUserSessions $commonUserSessions)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\CommonUserSessions  $commonUserSessions
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, CommonUserSessions $commonUserSessions)
  {
    //
  }

  public function revokeToken(Request $request)
  {
    $header = $request->header('Authorization');
    $session = CommonUserSessions::getUserBySession($header);
    if (!isset($session)) {
      return response()->json([
        'message' => 'invalid Session token',
        'usedToken' => $header
      ], 404);
    }
    $session->delete();
    return response()->json([
      'message' => 'session ended',
      'session_token' => $header
    ]);
  }
}
