<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddCommonUserTimestampDefaults extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::table('common_users', function ($table) {
      \DB::statement('UPDATE `common_users` SET `created_at` = current_timestamp()');
      \DB::statement('UPDATE `common_users` SET `updated_at` = current_timestamp()');
      \DB::statement('ALTER TABLE common_users MODIFY COLUMN created_at timestamp DEFAULT current_timestamp() NULL;');
      \DB::statement('ALTER TABLE common_users MODIFY COLUMN updated_at timestamp DEFAULT current_timestamp() NULL;');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    //
  }
}
