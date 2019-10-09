<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateItemsTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    // 'description', 'commodity', 'items', 'total_weight', 'length', 'width', 'height', pickup_details_id
    Schema::create('items', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->string('description');
      $table->string('commodity');
      $table->integer('items');
      $table->integer('total_weight');
      $table->integer('length');
      $table->integer('width');
      $table->integer('height');
      $table->bigInteger('pickup_details_id')->unsigned()->index()->nullable();
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
    Schema::dropIfExists('items');
  }
}
