<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->nullable();
            $table->string('cell_number_primary')->unique();
            $table->string('cell_number_secondary')->nullable();
            $table->string('cnic')->nullable();
            $table->enum('gender',['MALE','FEMALE','OTHER'])->nullable();
            $table->string('password');
            $table->string('city')->nullable();
            $table->string('qualification')->nullable();
            $table->string('designation')->nullable();
            $table->string('occupation')->nullable();
            $table->string('chief_earner')->nullable();
            $table->string('chief_earner_qualification')->nullable();
            $table->string('chief_earner_occupation')->nullable();
            $table->string('chief_earner_designation')->nullable();
            $table->boolean('otp_verified')->default(false);
            $table->timestamp('email_verified_at')->nullable();
            $table->timestamp('phone_verified_at')->nullable();
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
