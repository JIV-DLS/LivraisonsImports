<?php

use Illuminate\Http\Request;
use App\Bike;
use App\Http\Resources\BikesResource;

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

// Register Routes
Route::post('register', 'API\AuthController@register');
Route::post('login', 'API\AuthController@login');
Route::post('logout', 'API\AuthController@logout');

Route::apiResources([
    'bikes' => 'API\BikeController',
    'builders' => 'API\BuilderController',
    'items' => 'API\ItemController',
    'actions'=>'API\ActionController',
    'adresses'=>'API\AdresseController',
    'employes'=>'API\EmployeController',
    'etatsLivraisons'=>'API\EtatsLivraisonController',
    'lieuxLivraisons'=>'API\LieuxLivraisonController',
    'livraisons'=>'API\LivraisonController',
    'marchandises'=>'API\MarchandiseController',
    'navires'=>'API\NavireController',
    'profils'=>'API\ProfilController',
    'reinitialiserMotDePasses'=>'API\ReinitialiserMotDePasseController',
    'societes'=>'API\SocieteController',
    'transits'=>'API\TransitController',
    'typeMarchandises'=>'API\TypeMarchandiseController',
    'bikes/{bike}/ratings' => 'API\RatingController'
]);

Route::middleware('jwt.auth')->get('me', function(Request $request) {
    return auth()->user();
});

