<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCommonUsersTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('common_users', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->string('firstname');
      $table->string('lastname');
      $table->string('email')->unique();
      $table->string('company');
      $table->string('username')->unique();
      $table->text('password');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('common_users');
  }
}
