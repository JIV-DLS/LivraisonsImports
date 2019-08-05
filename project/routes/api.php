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
    'Actions' => 'API\ActionController',
    'Adresses' => 'API\AdresseController',
    'Employes' => 'API\EmployeController',
    'EtatsLivraisons' => 'API\EtatsLivraisonController',
    'LieuxLivraisons' => 'API\LieuxLivraisonController',
    'Livraisons' => 'API\LivraisonController',
    'Marchandises' => 'API\MarchandiseController',
    'Navires' => 'API\NavireController',
    'Profils' => 'API\ProfilController',
    'ReinitialiserMotDePasses' => 'API\ReinitialiserMotDePasseController',
    'Societes' => 'API\SocieteController',
    'Transits' => 'API\TransitController',
    'TypeMarchandises' => 'API\TypeMarchandiseController',
    'bikes/{bike}/ratings' => 'API\RatingController'
]);

Route::middleware('jwt.auth')->get('me', function(Request $request) {
    return auth()->user();
});