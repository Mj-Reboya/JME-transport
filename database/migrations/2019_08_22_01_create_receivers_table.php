<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReceiversTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('receivers', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->bigInteger('customers_id')->unsigned()->index()->nullable();
      $table->foreign('customers_id')->references('id')->on('customers');
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
    Schema::dropIfExists('receivers');
  }
}
