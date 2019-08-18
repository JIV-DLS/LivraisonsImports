<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Adresse;
use Validator;
use App\Http\Resources\AdressesResource;
use Illuminate\Support\Facades\DB;

class AdresseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     *
     * @SWG\Get(
     *     path="/api/adressesNotRelated",
     *     tags={"Adresses"},
     *     summary="List Adresses with have'nt related",
     *     @SWG\Response(
     *          response=200,
     *          description="Success: List all Adresses which are not related",
     *          @SWG\Schema(ref="#/definitions/Adresse")
     *      ),
     *     @SWG\Response(
     *          response="404",
     *          description="Not Found"
     *   )
     * ),
     */
    public function allNotRelated()
    {
        $listAdresse = DB::select("SELECT  adresses.id,adresses.rue,adresses.quartier,adresses.quartier,adresses.arrondissement,adresses.ville,adresses.pays,adresses.region  FROM    adresses LEFT JOIN employes t1 ON      t1.adresse_id = adresses.id LEFT JOIN societes t2 ON      t2.adresse_id = adresses.id WHERE   t1.adresse_id IS NULL AND t2.adresse_id IS NULL ");
        //dd(DB::select("SELECT  *  FROM    adresses LEFT JOIN employes t1 ON      t1.adresse_id = adresses.id LEFT JOIN societes t2 ON      t2.adresse_id = adresses.id WHERE   t1.adresse_id IS NULL AND t2.adresse_id IS NULL "));
        return $listAdresse;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     *
     * @SWG\Get(
     *     path="/api/adresses",
     *     tags={"Adresses"},
     *     summary="List Adresses",
     *     @SWG\Response(
     *          response=200,
     *          description="Success: List all Adresses",
     *          @SWG\Schema(ref="#/definitions/Adresse")
     *      ),
     *     @SWG\Response(
     *          response="404",
     *          description="Not Found"
     *   )
     * ),
     */
    public function index()
    {
        $listAdresse = Adresse::all();
        return $listAdresse;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @SWG\Post(
     *     path="/api/adresses",
     *     tags={"Adresses"},
     *     summary="Create Adresse",
     *     @SWG\Parameter(
     * 			name="body",
     * 			in="body",
     * 			required=true,
     * 			@SWG\Schema(ref="#/definitions/Adresse"),
     * 			description="Json format",
     * 		),
     *     @SWG\Response(
     *          response=201,
     *          description="Success: A Newly Created Adresse",
     *          @SWG\Schema(ref="#/definitions/Adresse")
     *      ),
     *     @SWG\Response(
     *          response="422",
     *          description="Missing mandatory field"
     *     ),
     *     @SWG\Response(
     *          response="404",
     *          description="Not Found"
     *     ),
     *     @SWG\Response(
	 * 			response="405",
	 * 			description="Invalid HTTP Method"
	 *      )
     * ),
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'ville' => 'required',
            'pays' => 'required'
            ]);
            
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);    
        }

        $createAdresse = Adresse::create($request->all());
        return  $createAdresse;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     * @SWG\Get(
     *     path="/api/adresses/{id}",
     *     tags={"Adresses"},
     *     summary="Get Adresse by Id",
     *     @SWG\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          type="integer",
     *          description="Display the specified Adresse by id.",
     * 		),
     *     @SWG\Response(
     *          response=200,
     *          description="Success: Return the Adresse",
     *          @SWG\Schema(ref="#/definitions/Adresse")
     *      ),
     *     @SWG\Response(
     *          response="404",
     *          description="Not Found"
     *     ),
     *     @SWG\Response(
	 * 			response="405",
	 * 			description="Invalid HTTP Method"
	 *      )
     * ),
     */
    public function show($id)
    {
        //dd(Adresse::with('Employe')->findOrFail($id));
        // $showAdresseById = Adresse::with('Adresse')->findOrFail($id);
        // return $showAdresseById;
        // dd($Adresse);
        return new AdressesResource(Adresse::with('Employe')->findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     * @SWG\Put(
     *     path="/api/adresses/{id}",
     *     tags={"Adresses"},
     *     summary="Update Adresse",
     *     @SWG\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          type="integer",
     *          description="Update the specified Adresse by id.",
     * 		),
     *     @SWG\Parameter(
     * 			name="body",
     * 			in="body",
     * 			required=true,
     * 			@SWG\Schema(ref="#/definitions/Adresse"),
     * 			description="Json format",
     * 		),
     *     @SWG\Response(
     *          response=200,
     *          description="Success: Return the Adresse updated",
     *          @SWG\Schema(ref="#/definitions/Adresse")
     *      ),
     *     @SWG\Response(
     *          response="422",
     *          description="Missing mandatory field"
     *     ),
     *     @SWG\Response(
     *          response="404",
     *          description="Not Found"
     *     ),
     *     @SWG\Response(
	 * 			response="405",
	 * 			description="Invalid HTTP Method"
	 *     )
     * ),
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'ville' => 'required',
            'pays' => 'required'
            ]);
            
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);    
        }
        
        $updateAdresseById = Adresse::findOrFail($id);
        $updateAdresseById->update($request->all());

        return $updateAdresseById;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     *     @SWG\Delete(
     *     path="/api/adresses/{id}",
     *     tags={"Adresses"},
     *     summary="Delete Adresse",
     *     description="Delete the specified Adresse by id",
     *     @SWG\Parameter(
     *         description="Adresse id to delete",
     *         in="path",
     *         name="id",
     *         required=true,
     *         type="integer",
     *         format="int64"
     *     ),
     *     @SWG\Response(
     *         response=404,
     *         description="Not found"
     *     ),
     *     @SWG\Response(
	 * 			response="405",
	 * 			description="Invalid HTTP Method"
	 *     ),
     *     @SWG\Response(
     *         response=204,
     *         description="Success: successful deleted"
     *     ),
     * )
     */
    public function destroy($id)
    {
        $deleteAdresseById = Adresse::find($id)->delete();
        return response()->json([], 204);
    }
}
