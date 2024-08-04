<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AvisController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\LieuController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\VillaController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\PaiementController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\NotificationController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('admin', AdminController::class);
Route::apiResource('avis', AvisController::class);
Route::apiResource('client', ClientController::class);
Route::apiResource('lieu', LieuController::class);
Route::apiResource('notification', NotificationController::class);
Route::apiResource('paiement', PaiementController::class);
Route::apiResource('reservation', ReservationController::class);
Route::apiResource('villa', VillaController::class);

Route::get('lieu/{id_lieu}/villa', [LieuController::class, 'villa']);

Route::get('villa/search', [VillaController::class, 'search']);


Route::post('/inscription', [AuthController::class, 'inscription']);
Route::post('/connexion', [AuthController::class, 'connexion']);
Route::post('/deconnexion', [AuthController::class, 'deconnexion']);


