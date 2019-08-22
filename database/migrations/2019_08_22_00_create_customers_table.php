<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCustomersTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    // 'name', 'company', 'street_address', 'suburb', 'state', 'post_code', 'phone_number'
    Schema::create('customers', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->string('name');
      $table->string('company');
      $table->string('street_address');
      $table->string('suburb');
      $table->string('state');
      $table->integer('post_code');
      $table->bigInteger('phone_number');
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
    Schema::dropIfExists('customers');
  }
}
