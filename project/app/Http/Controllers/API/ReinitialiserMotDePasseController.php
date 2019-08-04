<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\ReinitialiserMotDePasse;
use Validator;
use App\Http\Resources\ReinitialiserMotDePassesResource;

class ReinitialiserMotDePasseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     *
     * @SWG\Get(
     *     path="/api/ReinitialiserMotDePasses",
     *     tags={"ReinitialiserMotDePasses"},
     *     summary="List ReinitialiserMotDePasses",
     *     @SWG\Response(
     *          response=200,
     *          description="Success: List all ReinitialiserMotDePasses",
     *          @SWG\Schema(ref="#/definitions/ReinitialiserMotDePasse")
     *      ),
     *     @SWG\Response(
     *          response="404",
     *          description="Not Found"
     *   )
     * ),
     */
    public function index()
    {
        $listReinitialiserMotDePasse = ReinitialiserMotDePasse::all();
        return $listReinitialiserMotDePasse;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @SWG\Post(
     *     path="/api/ReinitialiserMotDePasses",
     *     tags={"ReinitialiserMotDePasses"},
     *     summary="Create ReinitialiserMotDePasse",
     *     @SWG\Parameter(
     * 			name="body",
     * 			in="body",
     * 			required=true,
     * 			@SWG\Schema(ref="#/definitions/ReinitialiserMotDePasse"),
     * 			description="Json format",
     * 		),
     *     @SWG\Response(
     *          response=201,
     *          description="Success: A Newly Created ReinitialiserMotDePasse",
     *          @SWG\Schema(ref="#/definitions/ReinitialiserMotDePasse")
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
            'email' => 'required',
            'token' => 'required'
            ]);
            
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);    
        }

        $createReinitialiserMotDePasse = ReinitialiserMotDePasse::create($request->all());
        return  $createReinitialiserMotDePasse;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     * @SWG\Get(
     *     path="/api/ReinitialiserMotDePasses/{id}",
     *     tags={"ReinitialiserMotDePasses"},
     *     summary="Get ReinitialiserMotDePasse by Id",
     *     @SWG\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          type="integer",
     *          description="Display the specified ReinitialiserMotDePasse by id.",
     * 		),
     *     @SWG\Response(
     *          response=200,
     *          description="Success: Return the ReinitialiserMotDePasse",
     *          @SWG\Schema(ref="#/definitions/ReinitialiserMotDePasse")
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
    public function show(ReinitialiserMotDePasse $ReinitialiserMotDePasse)
    {
        // $showReinitialiserMotDePasseById = ReinitialiserMotDePasse::with('ReinitialiserMotDePasse')->findOrFail($id);
        // return $showReinitialiserMotDePasseById;

        return new ReinitialiserMotDePassesResource($ReinitialiserMotDePasse);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     * @SWG\Put(
     *     path="/api/ReinitialiserMotDePasses/{id}",
     *     tags={"ReinitialiserMotDePasses"},
     *     summary="Update ReinitialiserMotDePasse",
     *     @SWG\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          type="integer",
     *          description="Update the specified ReinitialiserMotDePasse by id.",
     * 		),
     *     @SWG\Parameter(
     * 			name="body",
     * 			in="body",
     * 			required=true,
     * 			@SWG\Schema(ref="#/definitions/ReinitialiserMotDePasse"),
     * 			description="Json format",
     * 		),
     *     @SWG\Response(
     *          response=200,
     *          description="Success: Return the ReinitialiserMotDePasse updated",
     *          @SWG\Schema(ref="#/definitions/ReinitialiserMotDePasse")
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
          'email' => 'required',
          'token' => 'required'
            ]);
            
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);    
        }
        
        $updateReinitialiserMotDePasseById = ReinitialiserMotDePasse::findOrFail($id);
        $updateReinitialiserMotDePasseById->update($request->all());

        return $updateReinitialiserMotDePasseById;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     *     @SWG\Delete(
     *     path="/api/ReinitialiserMotDePasses/{id}",
     *     tags={"ReinitialiserMotDePasses"},
     *     summary="Delete ReinitialiserMotDePasse",
     *     description="Delete the specified ReinitialiserMotDePasse by id",
     *     @SWG\Parameter(
     *         description="ReinitialiserMotDePasse id to delete",
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
        $deleteReinitialiserMotDePasseById = ReinitialiserMotDePasse::find($id)->delete();
        return response()->json([], 204);
    }
}
