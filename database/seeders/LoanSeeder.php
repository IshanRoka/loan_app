<?php

namespace Database\Seeders;

use App\Models\Loan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class LoanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('loans')->insert([

            [
                'user_id' => 2,
                'amount' => 5000,
                'status' => 'pending',

            ],
            [
                'user_id' => 3,
                'amount' => 10000,
                'status' => 'pending',

            ],
        ]);
    }
}