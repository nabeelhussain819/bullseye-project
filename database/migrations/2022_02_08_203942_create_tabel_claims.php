<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTabelClaims extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('statuses', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('alias')->unique();
            $table->string('color_code');
            $table->timestamps();
        });

        Schema::create('claims', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('survey_id');
            $table->unsignedBigInteger('status_id');
            $table->boolean('is_accepted')->default(false);
            $table->unsignedBigInteger('accepted_by')->nullable();
            $table->unsignedBigInteger('accepted_at')->nullable();
            $table->timestamps();
        });

        Schema::table('claims', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')->cascadeOnUpdate();
            $table->foreign('status_id')->references('id')->on('statuses')->cascadeOnUpdate();
            $table->foreign('survey_id')->references('id')->on('surveys')->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('statuses');
        Schema::dropIfExists('claims');

    }
}
