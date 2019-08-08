<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\LieuxLivraison;
use Validator;
use App\Http\Resources\LieuxLivraisonsResource;

class LieuxLivraisonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     *
     * @SWG\Get(
     *     path="/api/lieuxLivraisons",
     *     tags={"LieuxLivraisons"},
     *     summary="List LieuxLivraisons",
     *     @SWG\Response(
     *          response=200,
     *          description="Success: List all LieuxLivraisons",
     *          @SWG\Schema(ref="#/definitions/LieuxLivraison")
     *      ),
     *     @SWG\Response(
     *          response="404",
     *          description="Not Found"
     *   )
     * ),
     */
    public function index()
    {
        $listLieuxLivraison = LieuxLivraison::all();
        return $listLieuxLivraison;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @SWG\Post(
     *     path="/api/LieuxLivraisons",
     *     tags={"LieuxLivraisons"},
     *     summary="Create LieuxLivraison",
     *     @SWG\Parameter(
     * 			name="body",
     * 			in="body",
     * 			required=true,
     * 			@SWG\Schema(ref="#/definitions/LieuxLivraison"),
     * 			description="Json format",
     * 		),
     *     @SWG\Response(
     *          response=201,
     *          description="Success: A Newly Created LieuxLivraison",
     *          @SWG\Schema(ref="#/definitions/LieuxLivraison")
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

        $createLieuxLivraison = LieuxLivraison::create($request->all());
        return  $createLieuxLivraison;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     * @SWG\Get(
     *     path="/api/LieuxLivraisons/{id}",
     *     tags={"LieuxLivraisons"},
     *     summary="Get LieuxLivraison by Id",
     *     @SWG\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          type="integer",
     *          description="Display the specified LieuxLivraison by id.",
     * 		),
     *     @SWG\Response(
     *          response=200,
     *          description="Success: Return the LieuxLivraison",
     *          @SWG\Schema(ref="#/definitions/LieuxLivraison")
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
    public function show(LieuxLivraison $LieuxLivraison)
    {
        // $showLieuxLivraisonById = LieuxLivraison::with('LieuxLivraison')->findOrFail($id);
        // return $showLieuxLivraisonById;

        return new LieuxLivraisonsResource($LieuxLivraison);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     * @SWG\Put(
     *     path="/api/LieuxLivraisons/{id}",
     *     tags={"LieuxLivraisons"},
     *     summary="Update LieuxLivraison",
     *     @SWG\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          type="integer",
     *          description="Update the specified LieuxLivraison by id.",
     * 		),
     *     @SWG\Parameter(
     * 			name="body",
     * 			in="body",
     * 			required=true,
     * 			@SWG\Schema(ref="#/definitions/LieuxLivraison"),
     * 			description="Json format",
     * 		),
     *     @SWG\Response(
     *          response=200,
     *          description="Success: Return the LieuxLivraison updated",
     *          @SWG\Schema(ref="#/definitions/LieuxLivraison")
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
        
        $updateLieuxLivraisonById = LieuxLivraison::findOrFail($id);
        $updateLieuxLivraisonById->update($request->all());

        return $updateLieuxLivraisonById;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     *     @SWG\Delete(
     *     path="/api/LieuxLivraisons/{id}",
     *     tags={"LieuxLivraisons"},
     *     summary="Delete LieuxLivraison",
     *     description="Delete the specified LieuxLivraison by id",
     *     @SWG\Parameter(
     *         description="LieuxLivraison id to delete",
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
        $deleteLieuxLivraisonById = LieuxLivraison::find($id)->delete();
        return response()->json([], 204);
    }
}
