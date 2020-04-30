<?php

use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/




Route::get('/', function () {
  return view('dev');
  // $env = env('APP_ENV', 'production');
  // if ($env != 'production') {
  //   return view('dev');
  // }
  // return view('prod');
});

Route::redirect('/login', '/#/login');
Route::redirect('/sign-up', '/#/sign-up');
Route::redirect('/orderForm', '/#/orderForm');
