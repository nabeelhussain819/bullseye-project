<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use  App\Models\Status;

class AddingStatusData extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $statues = [
            ['id' => Status::STATUS_CONFIRMED_ID, 'name' => 'CONFIRMED', 'alias' => 'CONFIRMED', 'color_code' => '#567a0d'],
            ['id' => Status::STATUS_APPROVED_ID, 'name' => 'APPROVED', 'alias' => 'APPROVED', 'color_code' => '#567a0d'],
            ['id' => Status::NEW_REQUEST_ID, 'name' => 'NEW REQUEST', 'alias' => 'NEW_REQUEST', 'color_code' => '#567a0d'],
            ['id' => Status::STATUS_DECLINED_ID, 'name' => 'DECLINED', 'alias' => 'DECLINED', 'color_code' => '#567a0d']

        ];
        Status::insert(Status::$DEFAULT_STATUSES);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Status::destroy(Status::getDefaultId());
    }
}
