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


    // Livraison
    Route::get('livraisons/transit_id', 'API\LivraisonController@transit_id');
    Route::get('livraisons/lieux_livraison_id', 'API\LivraisonController@lieux_livraison_id');
    Route::get('livraisons/etats_livraison_id', 'API\LivraisonController@etats_livraison_id');
    Route::get('livraisons/dateLivrDemandeeParBB', 'API\LivraisonController@dateLivrDemandeeParBB');
    Route::get('livraisons/dateReportApresEchecDeLivr', 'API\LivraisonController@dateReportApresEchecDeLivr');
    Route::get('livraisons/dateConfirmationFournisseur', 'API\LivraisonController@dateConfirmationFournisseur');
    Route::get('livraisons/dateLivrEffectiveBB', 'API\LivraisonController@dateLivrEffectiveBB');
    Route::get('livraisons/dateDebStationnement', 'API\LivraisonController@dateDebStationnement');
    Route::get('livraisons/dateDebSures', 'API\LivraisonController@dateDebSures');

    // Transit
    Route::get('transits/navire_id', 'API\TransitController@navire_id');
    Route::get('transits/societe_id', 'API\TransitController@societe_id');
    Route::get('transits/marchandise_id', 'API\TransitController@marchandise_id');
    Route::get('transits/dateArrivee', 'API\TransitController@dateArrivee');
    Route::get('transits/contenance', 'API\TransitController@contenance');
    Route::get('transits/franchise', 'API\TransitController@franchise');
    
    // TransitMarchandise
    Route::get('transitMarchandises/transit_id', 'API\TransitMarchandiseController@transit_id');
    Route::get('transitMarchandises/marchandise_id', 'API\TransitMarchandiseController@marchandise_id');

    // Marchandise
    Route::get('marchandises/type_marchandise_id', 'API\MarchandiseController@type_marchandise_id');
    Route::get('marchandises/libelle', 'API\MarchandiseController@libelle');

    // Societes
    Route::get('societes/adresse_id', 'API\SocieteController@adresse_id');
    Route::get('societes/libelle', 'API\SocieteController@libelle');

    // Employes
    Route::get('employes/adresse_id', 'API\EmployeController@adresse_id');
    Route::get('employes/nom', 'API\EmployeController@nom');
    Route::get('employes/prenom', 'API\EmployeController@prenom');
    Route::get('employes/dateNaiss', 'API\EmployeController@dateNaiss');


// Register Routes
Route::post('register', 'API\AuthController@register');
Route::post('login', 'API\AuthController@login');
Route::post('logout', 'API\AuthController@logout');
Route::get('adressesNotRelated', 'API\AdresseController@allNotRelated');
Route::get('transitsNotRelated', 'API\TransitController@allNotRelated');
Route::get('employesNotRelated', 'API\EmployeController@allNotRelated');

Route::apiResources([
    'users' => 'Auth\UserController',
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
    'transitMarchandises'=>'API\TransitMarchandiseController',
    'bikes/{bike}/ratings' => 'API\RatingController'
]);

Route::middleware('jwt.auth')->get('me', function(Request $request) {
    return auth()->user();
});

