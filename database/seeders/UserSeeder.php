<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;


class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([

            [
                'name' => 'Ishan Admin',
                'email' => 'ishan@admin.com',
                'password' => Hash::make('password')
            ],
            [
                'name' => 'Ishan Roka',
                'email' => 'ishan@gmail.com',
                'password' => Hash::make('password1')
            ],
            [
                'name' => 'Ishan Roka2',
                'email' => 'ishan2@gmail.com',
                'password' => Hash::make('password2')
            ],
        ]);
    }
}