<?php

use App\Http\Controllers\Api\LinkController;
use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\OtpController;
use App\Http\Controllers\Api\RegisterController;
use App\Http\Controllers\SurveyController;
use App\Http\Controllers\Api\UserController;
use \App\Http\Controllers\Api;
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

Route::post('/otp-verification', [OtpController::class, 'verification']);


Route::group(['prefix' => 'survey'], function () {
    Route::post('/create', [SurveyController::class, 'store']);
});


Route::group(['prefix' => 'links'], function () {
    Route::get('/', [LinkController::class, 'index']);
    Route::post('/store', [LinkController::class, 'store']);
    Route::post('/delete', [LinkController::class, 'destroy']);
    Route::post('/update-status', [LinkController::class, 'updateLinkStatus']);
});

Route::group(['prefix' => 'users'], function () {
    Route::get('/', [UserController::class, 'index']);
});

Route::get('/user', function (Request $request) {
    return Auth::user();
})->middleware('auth:api');

Route::get('/website-url', [LinkController::class, 'getNewLink']);


/////// Web Application redirection

//
//Route::middleware('auth')->group(function () {
//    Route::apiResources([
//        'survey' => \App\Http\Controllers\SurveyController::class,
//    ]);
//});

Route::middleware('auth:api')->group(function () {

    Route::get('/website-url', [LinkController::class, 'getNewLink']);

    Route::group(['prefix' => 'user'], function () {
        Route::get('/detail', [UserController::class, 'detail']);
    });

    Route::group(['prefix' => 'claim'], function () {
        Route::get('/statistics', [Api\ClaimController::class, 'statistics']);
    });

    Route::group(['prefix' => 'survey'], function () {
        Route::get('/current', [Api\SurveyController::class, 'current']);
    });

    Route::apiResources([
        'claim' => Api\ClaimController::class,
    ]);

});
