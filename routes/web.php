<?php

use App\Http\Controllers\frontpanel\HomeController as FrontHomeController;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;


Route::get('/clear-cache', function () {
    Artisan::call('optimize:clear');
    Artisan::call('view:clear');
    Artisan::call('config:clear');
    Artisan::call('cache:clear');
    Artisan::call('config:cache');
    return "Cache is cleared";
});
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


Route::get('/', [FrontHomeController::class, 'login'])->name('login');
Route::get('/form', [FrontHomeController::class, 'index'])->name('home');
Route::get('/dashboard', [FrontHomeController::class, 'dashboard'])->name('dashboard');
