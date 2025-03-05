<?php

use App\Http\Controllers\BackPanel\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoanController;

use Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful;

Route::post('/login', [AuthController::class, 'loginUser']);
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/loan/apply', [LoanController::class, 'apply']);
    Route::get('/loans', [LoanController::class, 'index']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::middleware('auth:sanctum', 'checkAdmin')->patch('/loan/{id}', [LoanController::class, 'updateStatus']);
});
