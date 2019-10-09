<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCommonUserSessionsTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('common_user_sessions', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->bigInteger('common_user_id')->unsigned()->index()->nullable();
      $table->foreign('common_user_id')->references('id')->on('common_users');
      $table->string('session_hash')->nullable()->unique();
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
    Schema::dropIfExists('common_user_sessions');
  }
}
