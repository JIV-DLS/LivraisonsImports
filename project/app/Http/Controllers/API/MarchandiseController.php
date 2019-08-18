<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Marchandise;
use Validator;
use App\Http\Resources\MarchandisesResource;
use DB;

class MarchandiseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     *
     * @SWG\Get(
     *     path="/api/marchandises",
     *     tags={"marchandise"},
     *     summary="List marchandise",
     *     @SWG\Response(
     *          response=200,
     *          description="Success: List all marchandise",
     *          @SWG\Schema(ref="#/definitions/Marchandise")
     *      ),
     *     @SWG\Response(
     *          response="404",
     *          description="Not Found"
     *   )
     * ),
     */
    public function index()
    {
        $listMarchandise = Marchandise::all();
        return $listMarchandise;
    }

     /**
     * Jean-Claude
     */

    public function type_marchandise_id(Request $r)
    {
        $l = DB::select("SELECT * from marchandises
        WHERE type_marchandise_id = ?", 
        [$r->id]);
        return response()->json($l, 200);
    }


    public function libelle(Request $r)
    {
        $l = DB::select("SELECT * from marchandises 
        WHERE libelle LIKE '".$r->data."%'", 
        []);

        return response()->json($l, 200);
    }


    /**
     * Jean-Claude
     */

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @SWG\Post(
     *     path="/api/marchandises",
     *     tags={"marchandise"},
     *     summary="Create Marchandise",
     *     @SWG\Parameter(
     * 			name="body",
     * 			in="body",
     * 			required=true,
     * 			@SWG\Schema(ref="#/definitions/Marchandise"),
     * 			description="Json format",
     * 		),
     *     @SWG\Response(
     *          response=201,
     *          description="Success: A Newly Created Marchandise",
     *          @SWG\Schema(ref="#/definitions/Marchandise")
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
            'libelle' => 'required',
            'typeMarchandise_id' => 'required'
            ]);
            
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);    
        }

        $createMarchandise = Marchandise::create($request->all());
        return  $createMarchandise;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     * @SWG\Get(
     *     path="/api/marchandises/{id}",
     *     tags={"marchandise"},
     *     summary="Get Marchandise by Id",
     *     @SWG\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          type="integer",
     *          description="Display the specified Marchandise by id.",
     * 		),
     *     @SWG\Response(
     *          response=200,
     *          description="Success: Return the Marchandise",
     *          @SWG\Schema(ref="#/definitions/Marchandise")
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
    public function show(Marchandise $Marchandise)
    {
        // $showMarchandiseById = Marchandise::with('Marchandise')->findOrFail($id);
        // return $showMarchandiseById;

        return new marchandisesResource($Marchandise);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     * @SWG\Put(
     *     path="/api/marchandises/{id}",
     *     tags={"marchandise"},
     *     summary="Update Marchandise",
     *     @SWG\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          type="integer",
     *          description="Update the specified Marchandise by id.",
     * 		),
     *     @SWG\Parameter(
     * 			name="body",
     * 			in="body",
     * 			required=true,
     * 			@SWG\Schema(ref="#/definitions/Marchandise"),
     * 			description="Json format",
     * 		),
     *     @SWG\Response(
     *          response=200,
     *          description="Success: Return the Marchandise updated",
     *          @SWG\Schema(ref="#/definitions/Marchandise")
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
            'libelle' => 'required',
            'typeMarchandise_id' => 'required'
            ]);
            
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);    
        }
        
        $updateMarchandiseById = Marchandise::findOrFail($id);
        $updateMarchandiseById->update($request->all());

        return $updateMarchandiseById;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     *     @SWG\Delete(
     *     path="/api/marchandises/{id}",
     *     tags={"marchandise"},
     *     summary="Delete Marchandise",
     *     description="Delete the specified Marchandise by id",
     *     @SWG\Parameter(
     *         description="Marchandise id to delete",
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
        $deleteMarchandiseById = Marchandise::find($id)->delete();
        return response()->json([], 204);
    }
}
