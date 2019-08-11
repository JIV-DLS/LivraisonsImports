<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Profil;
use Validator;
use App\Http\Resources\ProfilsResource;

class ProfilController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     *
     * @SWG\Get(
     *     path="/api/profils",
     *     tags={"Profils"},
     *     summary="List Profils",
     *     @SWG\Response(
     *          response=200,
     *          description="Success: List all Profils",
     *          @SWG\Schema(ref="#/definitions/Profil")
     *      ),
     *     @SWG\Response(
     *          response="404",
     *          description="Not Found"
     *   )
     * ),
     */
    public function index()
    {
        $listProfil = Profil::all();
        return $listProfil;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @SWG\Post(
     *     path="/api/profils",
     *     tags={"Profils"},
     *     summary="Create Profil",
     *     @SWG\Parameter(
     * 			name="body",
     * 			in="body",
     * 			required=true,
     * 			@SWG\Schema(ref="#/definitions/Profil"),
     * 			description="Json format",
     * 		),
     *     @SWG\Response(
     *          response=201,
     *          description="Success: A Newly Created Profil",
     *          @SWG\Schema(ref="#/definitions/Profil")
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

        $createProfil = Profil::create($request->all());
        return  $createProfil;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     * @SWG\Get(
     *     path="/api/profils/{id}",
     *     tags={"Profils"},
     *     summary="Get Profil by Id",
     *     @SWG\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          type="integer",
     *          description="Display the specified Profil by id.",
     * 		),
     *     @SWG\Response(
     *          response=200,
     *          description="Success: Return the Profil",
     *          @SWG\Schema(ref="#/definitions/Profil")
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
    public function show(Profil $Profil)
    {
        // $showProfilById = Profil::with('Profil')->findOrFail($id);
        // return $showProfilById;

        return new ProfilsResource($Profil);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     * @SWG\Put(
     *     path="/api/profils/{id}",
     *     tags={"Profils"},
     *     summary="Update Profil",
     *     @SWG\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          type="integer",
     *          description="Update the specified Profil by id.",
     * 		),
     *     @SWG\Parameter(
     * 			name="body",
     * 			in="body",
     * 			required=true,
     * 			@SWG\Schema(ref="#/definitions/Profil"),
     * 			description="Json format",
     * 		),
     *     @SWG\Response(
     *          response=200,
     *          description="Success: Return the Profil updated",
     *          @SWG\Schema(ref="#/definitions/Profil")
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
        
        $updateProfilById = Profil::findOrFail($id);
        $updateProfilById->update($request->all());

        return $updateProfilById;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     *     @SWG\Delete(
     *     path="/api/profils/{id}",
     *     tags={"Profils"},
     *     summary="Delete Profil",
     *     description="Delete the specified Profil by id",
     *     @SWG\Parameter(
     *         description="Profil id to delete",
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
        $deleteProfilById = Profil::find($id)->delete();
        return response()->json([], 204);
    }
}
