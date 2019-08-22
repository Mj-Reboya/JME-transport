<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTransactionsTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    // 'sender', 'payor', 'receiver', 'pickup_details'
    Schema::create('transactions', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->bigInteger('sender_id')->unsigned()->index()->nullable();
      $table->bigInteger('payor_id')->unsigned()->index()->nullable();
      $table->bigInteger('receiver_id')->unsigned()->index()->nullable();
      $table->bigInteger('pickup_details_id')->unsigned()->index()->nullable();
      $table->foreign('sender_id')->references('id')->on('senders');
      $table->foreign('payor_id')->references('id')->on('payors');
      $table->foreign('receiver_id')->references('id')->on('receivers');
      $table->foreign('pickup_details_id')->references('id')->on('pickup_details');
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
    Schema::dropIfExists('transactions');
  }
}
