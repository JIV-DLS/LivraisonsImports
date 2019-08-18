<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Transit;
use Validator;
use App\Http\Resources\TransitsResource;
use Illuminate\Support\Facades\DB;

class TransitController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     *
     * @SWG\Get(
     *     path="/api/transitsNotRelated",
     *     tags={"Transits"},
     *     summary="List Transits which are not related",
     *     @SWG\Response(
     *          response=200,
     *          description="Success: List all Transits which are not related",
     *          @SWG\Schema(ref="#/definitions/Transit")
     *      ),
     *     @SWG\Response(
     *          response="404",
     *          description="Not Found"
     *   )
     * ),
     */
    public function allNotRelated()
    {
        $listEmploye = DB::select("SELECT  transits.id,transits.franchise,transits.dateArrivee,transits.contenance  FROM    transits LEFT JOIN livraisons t1 ON      t1.id = transits.id WHERE   t1.id IS NULL");
        return $listEmploye;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     *
     * @SWG\Get(
     *     path="/api/transits",
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
     * Jean-Claude
     */

    public function navire_id(Request $r)
    {
        $l = DB::select("SELECT * from transits tr join navires na on(tr.navire_id = na.id)
        join societes so on(tr.societe_id = so.id)
        join marchandises ma on(tr.marchandise_id = ma.id)
        WHERE tr.navire_id >= ?", 
        [$r->id]);
        return response()->json($l, 200);
    }

    public function societe_id(Request $r)
    {
        $l = DB::select("SELECT * from transits tr join navires na on(tr.navire_id = na.id)
        join societes so on(tr.societe_id = so.id)
        join marchandises ma on(tr.marchandise_id = ma.id)
        WHERE tr.societe_id >= ?", 
        [$r->id]);
        return response()->json($l, 200);
    }

    public function marchandise_id(Request $r)
    {
        $l = DB::select("SELECT * from transits tr join navires na on(tr.navire_id = na.id)
        join societes so on(tr.societe_id = so.id)
        join marchandises ma on(tr.marchandise_id = ma.id)
        WHERE tr.marchandise_id >= ?", 
        [$r->id]);
        return response()->json($l, 200);
    }
  
    public function dateArrivee(Request $r)
    {
        $l = DB::select("SELECT * from transits tr join navires na on(tr.navire_id = na.id)
        join societes so on(tr.societe_id = so.id)
        join marchandises ma on(tr.marchandise_id = ma.id)
        WHERE tr.dateArrivee >= ? and tr.dateArrivee <= ?", 
        [$r->dateDebut, $r->dateFin]);
        return response()->json($l, 200);
    }

    public function contenance(Request $r)
    {
        $l = DB::select("SELECT * from transits tr join navires na on(tr.navire_id = na.id)
        join societes so on(tr.societe_id = so.id)
        join marchandises ma on(tr.marchandise_id = ma.id)
        WHERE tr.contenance = ?", 
        [$r->data]);
        return response()->json($l, 200);
    }

    public function franchise(Request $r)
    {
        $l = DB::select("SELECT * from transits tr join navires na on(tr.navire_id = na.id)
        join societes so on(tr.societe_id = so.id)
        join marchandises ma on(tr.marchandise_id = ma.id)
        WHERE tr.franchise = ?", 
        [$r->data]);
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
     *     path="/api/transits",
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
            "navire_id"=> 'required',
            "societe_id"=> 'required',
            "marchandise_id"=> 'required',
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
     *     path="/api/transits/{id}",
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
    public function show($id)//Transit $Transit)
    {
        // $showTransitById = Transit::with('Transit')->findOrFail($id);
        // return $showTransitById;

        return new TransitsResource(Transit::with('Navire')->findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     * @SWG\Put(
     *     path="/api/transits/{id}",
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
            "navire_id"=> 'required',
            "societe_id"=> 'required',
            "marchandise_id"=> 'required',
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
     *     path="/api/transits/{id}",
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
