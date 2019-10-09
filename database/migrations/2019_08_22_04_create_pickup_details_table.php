<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePickupDetailsTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    // 'parcel_type', 'option', 'pickup_date', 'ready_at', 'closing_time', 'special_instruction'
    Schema::create('pickup_details', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->string('parcel_type');
      $table->string('special_instruction')->nullable();
      $table->string('option');
      $table->date('pickup_date');
      $table->time('ready_at');
      $table->time('closing_time');
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
    Schema::dropIfExists('pickup_details');
  }
}
