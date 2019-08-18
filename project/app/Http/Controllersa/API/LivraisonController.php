<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Livraison;
use Validator;
use App\Http\Resources\LivraisonsResource;

class LivraisonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     *
     * @SWG\Get(
     *     path="/api/livraisons",
     *     tags={"Livraisons"},
     *     summary="List Livraisons",
     *     @SWG\Response(
     *          response=200,
     *          description="Success: List all Livraisons",
     *          @SWG\Schema(ref="#/definitions/Livraison")
     *      ),
     *     @SWG\Response(
     *          response="404",
     *          description="Not Found"
     *   )
     * ),
     */
    public function index()
    {
        $listLivraison = Livraison::all();
        return $listLivraison;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @SWG\Post(
     *     path="/api/livraisons",
     *     tags={"Livraisons"},
     *     summary="Create Livraison",
     *     @SWG\Parameter(
     * 			name="body",
     * 			in="body",
     * 			required=true,
     * 			@SWG\Schema(ref="#/definitions/Livraison"),
     * 			description="Json format",
     * 		),
     *     @SWG\Response(
     *          response=201,
     *          description="Success: A Newly Created Livraison",
     *          @SWG\Schema(ref="#/definitions/Livraison")
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
            "transit_id"=> 'required',
            "dateLivrDemandeeParBB"=> 'required',
            "dateLivrEffectiveBB"=>'required',
            "dateConfirmationFournisseur"=>'required',
            "dateDebStationnement"=>'required',
            "dateDebSures"=>'required',
            "delaiDateArrDateLivr"=>'required',
            "etats_livraison_id"=>'required',
            "lieux_livraison_id"=>'required'
            ]);
            
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);    
        }

        $createLivraison = Livraison::create($request->all());
        return  $createLivraison;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     * @SWG\Get(
     *     path="/api/livraisons/{id}",
     *     tags={"Livraisons"},
     *     summary="Get Livraison by Id",
     *     @SWG\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          type="integer",
     *          description="Display the specified Livraison by id.",
     * 		),
     *     @SWG\Response(
     *          response=200,
     *          description="Success: Return the Livraison",
     *          @SWG\Schema(ref="#/definitions/Livraison")
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
    public function show($id)//Livraison $Livraison)
    {
        // $showLivraisonById = Livraison::with('Livraison')->findOrFail($id);
        // return $showLivraisonById;
        return new LivraisonsResource(Livraison::with('Transit')->with('lieuxLivraison')->with('etatsLivraison')->findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     * @SWG\Put(
     *     path="/api/livraisons/{id}",
     *     tags={"Livraisons"},
     *     summary="Update Livraison",
     *     @SWG\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          type="integer",
     *          description="Update the specified Livraison by id.",
     * 		),
     *     @SWG\Parameter(
     * 			name="body",
     * 			in="body",
     * 			required=true,
     * 			@SWG\Schema(ref="#/definitions/Livraison"),
     * 			description="Json format",
     * 		),
     *     @SWG\Response(
     *          response=200,
     *          description="Success: Return the Livraison updated",
     *          @SWG\Schema(ref="#/definitions/Livraison")
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
            "transit_id"=> 'required',
            "dateLivrDemandeeParBB"=> 'required',
            "dateLivrEffectiveBB"=>'required',
            "dateConfirmationFournisseur"=>'required',
            "dateDebStationnement"=>'required',
            "dateDebSures"=>'required',
            "delaiDateArrDateLivr"=>'required',
            "etats_livraison_id"=>'required',
            "lieux_livraison_id"=>'required'       ]);
            
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);    
        }
        
        $updateLivraisonById = Livraison::findOrFail($id);
        $updateLivraisonById->update($request->all());

        return $updateLivraisonById;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     *     @SWG\Delete(
     *     path="/api/livraisons/{id}",
     *     tags={"Livraisons"},
     *     summary="Delete Livraison",
     *     description="Delete the specified Livraison by id",
     *     @SWG\Parameter(
     *         description="Livraison id to delete",
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
        $deleteLivraisonById = Livraison::find($id)->delete();
        return response()->json([], 204);
    }
}
