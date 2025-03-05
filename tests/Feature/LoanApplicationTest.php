<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\User;
use App\Models\Loan;
use Laravel\Sanctum\Sanctum;

class LoanApplicationTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_can_login_and_get_token()
    {
        $user = User::create([
            'email' => 'ishan@admin.com',
            'password' => bcrypt('password'),
        ]);

        $response = $this->postJson('/api/login', [
            'email' => 'ishan@admin.com',
            'password' => 'password',
        ]);

        $response->assertStatus(200)->assertJsonStructure(['token']);
    }


    public function test_authenticated_user_can_apply_for_loan()
    {
        $user = User::create();

        Sanctum::actingAs($user);

        $response = $this->postJson('/api/loan/apply', ['amount' => 5000]);

        $response->assertStatus(201)
            ->assertJson([
                'type' => 'success',
                'message' => 'Loan application submitted successfully!',
            ]);
    }


    public function test_authenticated_user_can_view_loans()
    {
        $user = User::create([
            'email' => 'testuser@example.com',
            'password' => bcrypt('password123'),
        ]);

        Sanctum::actingAs($user);

        $loan = Loan::create([
            'user_id' => $user->id,
            'amount' => 5000,
            'status' => 'pending',
        ]);

        $anotherUser = User::create([
            'email' => 'anotheruser@example.com',
            'password' => bcrypt('password123'),
        ]);
        Loan::create([
            'user_id' => $anotherUser->id,
            'amount' => 10000,
            'status' => 'approved',
        ]);

        $response = $this->getJson('/api/loans');

        $response->assertStatus(200)
            ->assertJsonCount(1, 'loans')
            ->assertJsonFragment([
                'amount' => '5000.00',
                'status' => 'pending',
            ])
            ->assertJsonFragment([
                'message' => 'Loan applications retrieved successfully!'
            ]);
    }
}
