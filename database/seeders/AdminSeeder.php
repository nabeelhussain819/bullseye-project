<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        User::create([
            'name' => 'admin',
            'email' => 'superadmin@admin.com',
            'password' => Hash::make('1Pakistan?'),
            'is_admin' => true,
            'otp_verified' => true,
            'cell_number_primary' => '0300100020'
        ]);
    }
}
