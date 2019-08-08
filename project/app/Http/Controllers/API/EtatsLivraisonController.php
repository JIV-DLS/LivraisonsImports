<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\EtatsLivraison;
use Validator;
use App\Http\Resources\EtatsLivraisonsResource;

class EtatsLivraisonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     *
     * @SWG\Get(
     *     path="/api/etatsLivraisons",
     *     tags={"EtatsLivraisons"},
     *     summary="List EtatsLivraisons",
     *     @SWG\Response(
     *          response=200,
     *          description="Success: List all EtatsLivraisons",
     *          @SWG\Schema(ref="#/definitions/EtatsLivraison")
     *      ),
     *     @SWG\Response(
     *          response="404",
     *          description="Not Found"
     *   )
     * ),
     */
    public function index()
    {
        $listEtatsLivraison = EtatsLivraison::all();
        return $listEtatsLivraison;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @SWG\Post(
     *     path="/api/EtatsLivraisons",
     *     tags={"EtatsLivraisons"},
     *     summary="Create EtatsLivraison",
     *     @SWG\Parameter(
     * 			name="body",
     * 			in="body",
     * 			required=true,
     * 			@SWG\Schema(ref="#/definitions/EtatsLivraison"),
     * 			description="Json format",
     * 		),
     *     @SWG\Response(
     *          response=201,
     *          description="Success: A Newly Created EtatsLivraison",
     *          @SWG\Schema(ref="#/definitions/EtatsLivraison")
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
            'libelle' => 'required'
            ]);
            
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);    
        }

        $createEtatsLivraison = EtatsLivraison::create($request->all());
        return  $createEtatsLivraison;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     * @SWG\Get(
     *     path="/api/EtatsLivraisons/{id}",
     *     tags={"EtatsLivraisons"},
     *     summary="Get EtatsLivraison by Id",
     *     @SWG\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          type="integer",
     *          description="Display the specified EtatsLivraison by id.",
     * 		),
     *     @SWG\Response(
     *          response=200,
     *          description="Success: Return the EtatsLivraison",
     *          @SWG\Schema(ref="#/definitions/EtatsLivraison")
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
    public function show(EtatsLivraison $EtatsLivraison)
    {
        // $showEtatsLivraisonById = EtatsLivraison::with('EtatsLivraison')->findOrFail($id);
        // return $showEtatsLivraisonById;

        return new EtatsLivraisonsResource($EtatsLivraison);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     * @SWG\Put(
     *     path="/api/EtatsLivraisons/{id}",
     *     tags={"EtatsLivraisons"},
     *     summary="Update EtatsLivraison",
     *     @SWG\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          type="integer",
     *          description="Update the specified EtatsLivraison by id.",
     * 		),
     *     @SWG\Parameter(
     * 			name="body",
     * 			in="body",
     * 			required=true,
     * 			@SWG\Schema(ref="#/definitions/EtatsLivraison"),
     * 			description="Json format",
     * 		),
     *     @SWG\Response(
     *          response=200,
     *          description="Success: Return the EtatsLivraison updated",
     *          @SWG\Schema(ref="#/definitions/EtatsLivraison")
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
            'libelle' => 'required'
            ]);
            
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);    
        }
        
        $updateEtatsLivraisonById = EtatsLivraison::findOrFail($id);
        $updateEtatsLivraisonById->update($request->all());

        return $updateEtatsLivraisonById;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     *     @SWG\Delete(
     *     path="/api/EtatsLivraisons/{id}",
     *     tags={"EtatsLivraisons"},
     *     summary="Delete EtatsLivraison",
     *     description="Delete the specified EtatsLivraison by id",
     *     @SWG\Parameter(
     *         description="EtatsLivraison id to delete",
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
        $deleteEtatsLivraisonById = EtatsLivraison::find($id)->delete();
        return response()->json([], 204);
    }
}
