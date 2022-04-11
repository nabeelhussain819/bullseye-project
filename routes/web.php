<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\ClaimController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();

Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::middleware(['auth'])->prefix('app')->group(function () {
    
    // surveys start
    Route::get('surveys', [\App\Http\Controllers\SurveyController::class, 'index'])->name('survey.index');
    Route::post('surveys/destroy', [\App\Http\Controllers\SurveyController::class, 'destroy'])->name('survey.destroy');
    Route::post('surveys/update', [\App\Http\Controllers\SurveyController::class, 'update'])->name('survey.update');
    Route::post('surveys/store', [\App\Http\Controllers\SurveyController::class, 'store'])->name('survey.store');
    // surveys end 

    // claims start
    Route::get('claims',[ClaimController::class, 'index'])->name('claim.index');
    Route::post('claims/update',[ClaimController::class,'update'])->name('claim.update');
    Route::get('claims/view/{id}',[ClaimController::class, 'show'])->name('claim.show');
    // claims end

    // consumer start
    Route::get('consumer/{id}', [UserController::class, 'show'])->name('consumer.show');
    Route::get('consumer-details/{id}',[UserController::class,'getUserDetails'])->name('get-consumer-details');
    // consumer end

    // home start
    Route::get('home/get-total-counts', [HomeController::class, 'getCounts'])->name('get-total-counts');
    //home end
});

Route::get('/{any}', function () {
    return view('index');
})->where('any', '.*');
