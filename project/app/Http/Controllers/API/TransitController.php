<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Transit;
use Validator;
use App\Http\Resources\TransitsResource;

class TransitController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     *
     * @SWG\Get(
     *     path="/api/Transits",
     *     tags={"Transits"},
     *     summary="List Transits",
     *     @SWG\Response(
     *          response=200,
     *          description="Success: List all Transits",
     *          @SWG\Schema(ref="#/definitions/Transit")
     *      ),
     *     @SWG\Response(
     *          response="404",
     *          description="Not Found"
     *   )
     * ),
     */
    public function index()
    {
        $listTransit = Transit::all();
        return $listTransit;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @SWG\Post(
     *     path="/api/Transits",
     *     tags={"Transits"},
     *     summary="Create Transit",
     *     @SWG\Parameter(
     * 			name="body",
     * 			in="body",
     * 			required=true,
     * 			@SWG\Schema(ref="#/definitions/Transit"),
     * 			description="Json format",
     * 		),
     *     @SWG\Response(
     *          response=201,
     *          description="Success: A Newly Created Transit",
     *          @SWG\Schema(ref="#/definitions/Transit")
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
            "navire"=> 'required',
            "fournisseur"=> 'required',
            "marchandise"=> 'required',
            "dateArrivee"=> 'required'
            ,"franchise"=> 'required'
            ]);
            
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);    
        }

        $createTransit = Transit::create($request->all());
        return  $createTransit;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     * @SWG\Get(
     *     path="/api/Transits/{id}",
     *     tags={"Transits"},
     *     summary="Get Transit by Id",
     *     @SWG\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          type="integer",
     *          description="Display the specified Transit by id.",
     * 		),
     *     @SWG\Response(
     *          response=200,
     *          description="Success: Return the Transit",
     *          @SWG\Schema(ref="#/definitions/Transit")
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
    public function show(Transit $Transit)
    {
        // $showTransitById = Transit::with('Transit')->findOrFail($id);
        // return $showTransitById;

        return new TransitsResource($Transit);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     * @SWG\Put(
     *     path="/api/Transits/{id}",
     *     tags={"Transits"},
     *     summary="Update Transit",
     *     @SWG\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          type="integer",
     *          description="Update the specified Transit by id.",
     * 		),
     *     @SWG\Parameter(
     * 			name="body",
     * 			in="body",
     * 			required=true,
     * 			@SWG\Schema(ref="#/definitions/Transit"),
     * 			description="Json format",
     * 		),
     *     @SWG\Response(
     *          response=200,
     *          description="Success: Return the Transit updated",
     *          @SWG\Schema(ref="#/definitions/Transit")
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
            "navire"=> 'required',
            "fournisseur"=> 'required',
            "marchandise"=> 'required',
            "dateArrivee"=> 'required'
            ,"franchise"=> 'required'
            ]);
            
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);    
        }
        
        $updateTransitById = Transit::findOrFail($id);
        $updateTransitById->update($request->all());

        return $updateTransitById;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     *     @SWG\Delete(
     *     path="/api/Transits/{id}",
     *     tags={"Transits"},
     *     summary="Delete Transit",
     *     description="Delete the specified Transit by id",
     *     @SWG\Parameter(
     *         description="Transit id to delete",
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
        $deleteTransitById = Transit::find($id)->delete();
        return response()->json([], 204);
    }
}
