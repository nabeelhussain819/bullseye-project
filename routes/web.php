<?php

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
    //breaking this api resource, I am not getting survey-destroy etc @armash

    Route::get('surveys', [\App\Http\Controllers\SurveyController::class, 'index'])->name('survey.index');
    Route::post('surveys/destroy', [\App\Http\Controllers\SurveyController::class, 'destroy'])->name('survey.destroy');
    Route::post('surveys/update', [\App\Http\Controllers\SurveyController::class, 'update'])->name('survey.update');
    Route::post('surveys/store', [\App\Http\Controllers\SurveyController::class, 'store'])->name('survey.store');

});


Route::get('/{any}', function () {
    return view('index');
})->where('any', '.*');
