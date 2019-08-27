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
      $table->string('transaction_hash');
      $table->timestamps();
    });

    DB::update("ALTER TABLE transactions AUTO_INCREMENT = 1000;");
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
