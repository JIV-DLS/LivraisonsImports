<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\TypeMarchandise;
use Validator;
use App\Http\Resources\TypeMarchandisesResource;

class TypeMarchandiseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     *
     * @SWG\Get(
     *     path="/api/typeMarchandises",
     *     tags={"TypeMarchandises"},
     *     summary="List TypeMarchandises",
     *     @SWG\Response(
     *          response=200,
     *          description="Success: List all TypeMarchandises",
     *          @SWG\Schema(ref="#/definitions/TypeMarchandise")
     *      ),
     *     @SWG\Response(
     *          response="404",
     *          description="Not Found"
     *   )
     * ),
     */
    public function index()
    {
        $listTypeMarchandise = TypeMarchandise::all();
        return $listTypeMarchandise;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @SWG\Post(
     *     path="/api/typeMarchandises",
     *     tags={"TypeMarchandises"},
     *     summary="Create TypeMarchandise",
     *     @SWG\Parameter(
     * 			name="body",
     * 			in="body",
     * 			required=true,
     * 			@SWG\Schema(ref="#/definitions/TypeMarchandise"),
     * 			description="Json format",
     * 		),
     *     @SWG\Response(
     *          response=201,
     *          description="Success: A Newly Created TypeMarchandise",
     *          @SWG\Schema(ref="#/definitions/TypeMarchandise")
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

        $createTypeMarchandise = TypeMarchandise::create($request->all());
        return  $createTypeMarchandise;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     * @SWG\Get(
     *     path="/api/typeMarchandises/{id}",
     *     tags={"TypeMarchandises"},
     *     summary="Get TypeMarchandise by Id",
     *     @SWG\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          type="integer",
     *          description="Display the specified TypeMarchandise by id.",
     * 		),
     *     @SWG\Response(
     *          response=200,
     *          description="Success: Return the TypeMarchandise",
     *          @SWG\Schema(ref="#/definitions/TypeMarchandise")
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
    public function show($id)//TypeMarchandise $TypeMarchandise)
    {
        // $showTypeMarchandiseById = TypeMarchandise::with('TypeMarchandise')->findOrFail($id);
        // return $showTypeMarchandiseById;
        return new TypeMarchandisesResource(TypeMarchandise::with('Marchandise')->findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     * @SWG\Put(
     *     path="/api/typeMarchandises/{id}",
     *     tags={"TypeMarchandises"},
     *     summary="Update TypeMarchandise",
     *     @SWG\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          type="integer",
     *          description="Update the specified TypeMarchandise by id.",
     * 		),
     *     @SWG\Parameter(
     * 			name="body",
     * 			in="body",
     * 			required=true,
     * 			@SWG\Schema(ref="#/definitions/TypeMarchandise"),
     * 			description="Json format",
     * 		),
     *     @SWG\Response(
     *          response=200,
     *          description="Success: Return the TypeMarchandise updated",
     *          @SWG\Schema(ref="#/definitions/TypeMarchandise")
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
        
        $updateTypeMarchandiseById = TypeMarchandise::findOrFail($id);
        $updateTypeMarchandiseById->update($request->all());

        return $updateTypeMarchandiseById;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     *     @SWG\Delete(
     *     path="/api/typeMarchandises/{id}",
     *     tags={"TypeMarchandises"},
     *     summary="Delete TypeMarchandise",
     *     description="Delete the specified TypeMarchandise by id",
     *     @SWG\Parameter(
     *         description="TypeMarchandise id to delete",
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
        $deleteTypeMarchandiseById = TypeMarchandise::find($id)->delete();
        return response()->json([], 204);
    }
}
