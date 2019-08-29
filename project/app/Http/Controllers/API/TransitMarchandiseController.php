<?php


namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\TransitMarchandise;
use Validator;
use App\Http\Resources\TransitMarchandisesResource;
use Illuminate\Support\Facades\DB;

class TransitMarchandiseController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     *
     * @SWG\Get(
     *     path="/api/transitMarchandisesNotRelated",
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
     *     path="/api/transitMarchandises",
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
        $listTransit = TransitMarchandise::whereState('1')->get();
        return $listTransit;
    }

     /**
     * Jean-Claude
     */
    public function count($v)
    {
        $i=0;
        foreach ($v as $key => $value) {
            $i++;
        }
        return $i;
    }
    public function transit_id(Request $r,$t=null)
    {
        return $this->selectCollectionJson(DB::select("SELECT * from transit_marchandises tr join transits na on(tr.transit_id = na.id)
        join marchandises ma on(tr.marchandise_id = ma.id)
        WHERE state=1 and tr.transit_id = ".$r->id),$t);
    }

    public function marchandise_id(Request $r)
    {
        $l = DB::select("SELECT * from transit_marchandises tr join transits na on(tr.transit_id = na.id)
        
        join marchandises ma on(tr.marchandise_id = ma.id)
    WHERE state=1 and tr.marchandise_id = ".$r->id);
        return response()->json($l, 200);
    }

    public function quantite(Request $r)
    {
        // $l = DB::select("SELECT * from transit_marchandises tr join transits na on(tr.transit_id = na.id)
        
        // join marchandises ma on(tr.marchandise_id = ma.id)"
        // + " WHERE tr.quantite = ?", 
        // [$r->data]);
        // return response()->json($l, 200);
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
     *     path="/api/transitMarchandises",
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
    function creator($request)
    {

        foreach ($request['marchandises'] as $key => $value) {
            
            $createTransit[$key] = TransitMarchandise::create([
                'transit_id'=>$request['transit_id'],
                'marchandise_id'=>$value['marchandise_id'],
                'quantite'=> $value['quantite']
            ] 
        );
        }

        // $createTransit = TransitMarchandise::create($request->all());
        
        return  $createTransit;
    }
    public function store(Request $request)
    {
        $request['id']=2;

        if(($tM=self::transit_id($request,true))->count()>0)
        
            return self::update($request,$request['transit_id']);
        
        $validator = Validator::make($request->all(), [
            "transit_id"=> 'required',
            "marchandises"=> 'required'
            ]);
            
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);    
        }

        return response()->json(self::creator($request), 201); 
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     * @SWG\Get(
     *     path="/api/transitMarchandises/{id}",
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
        // $showTransitById = TransitMarchandise::with('Transit')->findOrFail($id);
        // return $showTransitById;

        return new TransitMarchandisesResource(TransitMarchandise::with('Transit')->with('Marchandise')->findOrFail(1));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     * @SWG\Put(
     *     path="/api/transitMarchandises/{id}",
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
            "transit_id"=> 'required',
            "marchandises"=> 'required'
            ]);
            
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);    
        }
        $u=DB::update(
            "UPDATE transit_marchandises 
            SET state = false
            WHERE transit_id =".$request['transit_id']
        );
        return response()->json(self::creator($request), 200); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     *     @SWG\Delete(
     *     path="/api/transitMarchandises/{id}",
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
        $u=DB::update(
            "UPDATE transit_marchandises 
            SET state = false
            WHERE transit_id =".$id
        );
        return response()->json([], 204);
    }
}
