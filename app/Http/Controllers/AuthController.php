<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\AuthRequest;
use App\Models\User;
use Exception;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{

    function loginUser(AuthRequest $request)
    {
        try {
            $post = $request->all();

            $credentials = [
                'email' => $post['email'],
                'password' => $post['password']
            ];

            if (Auth::attempt($credentials)) {
                $user = Auth::user();
                return response()->json([
                    'type' => 'success',
                    'message' => 'Login successful! Redirecting...',
                    'user_id' => $user->id,
                    'token' => $user->createToken('auth_token')->plainTextToken,
                    'token_type' => 'bearer',
                ], 200);
            } else {
                return response()->json([
                    'type' => 'error',
                    'message' => 'Invalid email or password',
                ], 401);
            }
        } catch (QueryException $e) {
            return response()->json([
                'type' => 'error',
                'message' => 'Invalid email or password',
            ], 500);
        } catch (Exception $e) {
            return response()->json([
                'type' => 'error',
                'message' => 'Invalid email or password',
            ], 500);
        }
    }

    public function logout(Request $request)
    {
        try {
            $user = $request->user();

            if (!$user) {
                return response()->json([
                    'status' => false,
                    'message' => 'No authenticated user found.',
                ], 400);
            }

            $user->tokens()->delete();

            return response()->json([
                'status' => true,
                'user' => $user,
                'message' => 'You logged out successfully',
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'An error occurred while logging out: ' . $e->getMessage(),
            ], 500);
        }
    }
}
