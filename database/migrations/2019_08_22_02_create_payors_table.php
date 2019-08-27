<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePayorsTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('payors', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->date('booking_date');
      $table->string('name');
      $table->string('company');
      $table->string('street_address');
      $table->string('suburd');
      $table->string('state');
      $table->integer('post_code');
      $table->bigInteger('phone_number');
      // $table->morphs('transaction');
      $table->bigInteger('transaction_id')->unsigned()->index()->nullable();
      $table->foreign('transaction_id')->references('id')->on('transactions');
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
    Schema::dropIfExists('payors');
  }
}
