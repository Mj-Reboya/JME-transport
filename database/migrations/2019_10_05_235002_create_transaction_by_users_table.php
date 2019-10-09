<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTransactionByUsersTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('transaction_by_users', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->bigInteger('transaction_id')->unsigned()->index()->nullable();
      $table->foreign('transaction_id')->references('id')->on('transactions');
      $table->bigInteger('common_user_id')->unsigned()->index()->nullable();
      $table->foreign('common_user_id')->references('id')->on('common_users');
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
    Schema::dropIfExists('transaction_by_users');
  }
}
