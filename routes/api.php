<?php

use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\OtpController;
use App\Http\Controllers\Api\RegisterController;
use App\Http\Controllers\SurveyController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('/login', [LoginController::class, 'login']);

Route::post('/signup', [RegisterController::class, 'register']);

Route::post('/otp-verification',[OtpController::class, 'verification']);


Route::group(['prefix' => 'survey'], function(){

    Route::post('/create',[SurveyController::class, 'store']);
});

Route::group(['prefix' => 'users'], function(){
    Route::get('/', [UserController::class, 'index']);
});

Route::get('/user', function(Request $request) {
    return Auth::user();
})->middleware('auth:api');