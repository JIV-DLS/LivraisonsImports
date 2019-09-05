<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use LivraisonController;//App\Http\Controllers\API\
use App\Bdc;
use App\TransitMarchandise;
use App\Livraison;
use App\Societe;
use App\Transit;
use Validator;
use App\Http\Resources\BdcsResource;
use Illuminate\Support\Facades\DB;

class BdcController extends Controller
{
    function creator($request)
    {

        foreach ($request['marchandises'] as $key => $value) 
            $createTransit[$key] = TransitMarchandise::create([
                'transit_id'=>$request['transit_id'],
                'marchandise_id'=>$value['marchandise_id'],
                'quantite'=> $value['quantite']
            ]);
        

        // $createTransit = TransitMarchandise::create($request->all());
        
        return  $createTransit;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     *
     * @SWG\Get(
     *     path="/api/bdcs",
     *     tags={"Bdcs"},
     *     summary="List Bdcs",
     *     @SWG\Response(
     *          response=200,
     *          description="Success: List all Bdcs",
     *          @SWG\Schema(ref="#/definitions/Bdc")
     *      ),
     *     @SWG\Response(
     *          response="404",
     *          description="Not Found"
     *   )
     * ),
     */
    public function index()
    {
        $tM=TransitMarchandise::
        whereState(1)
        ->select('transit_id',DB::raw('sum(quantite) as qteTotal'),DB::raw('count(*) as nbrM'))
        ->groupBy('transit_id')
        ->get()
        ;
        $Bdc=collect();
        foreach ($tM as $key => $value) {
            $transit_id=$tM[$key]->transit_id;
            $Bdc[$key]=collect();
            $Bdc[$key]->put('qteTotal',$tM[$key]['qteTotal']);
            $Bdc[$key]->put('nbrM',$tM[$key]['nbrM']);
            $Bdc[$key]->put('transit',
            ($transit=Transit::
            with('societe')
            ->select('id','societe_id')
            ->findOrFail($transit_id)));
            $recu=(Livraison::
            select('id','dateLivrDemandeeParBB','etats_livraison_id','dateLivrEffectiveBB')
            ->whereTransit_id($transit_id)
            ->get());
            $Bdc[$key]->put('livraison',$recu);
        }
        return $Bdc;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @SWG\Post(
     *     path="/api/bdcs",
     *     tags={"Bdcs"},
     *     summary="Create Bdc",
     *     @SWG\Parameter(
     * 			name="body",
     * 			in="body",
     * 			required=true,
     * 			@SWG\Schema(ref="#/definitions/Bdc"),
     * 			description="Json format",
     * 		),
     *     @SWG\Response(
     *          response=201,
     *          description="Success: A Newly Created Bdc",
     *          @SWG\Schema(ref="#/definitions/Bdc")
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
            'societe_id' => 'required',
            'dateLivrDemandeeParBB' => 'required',
            'marchandises' => 'required'
            ]);
            
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);    
        }

        $t=Transit::create([
            'societe_id' => $request->societe_id
        ]);
        dump($request->marchandises);
        self::creator([
            'transit_id'=>$t,
            'marchandises' => $request->marchandises
            ]);
        Livraison::create([
            'transit_id'=>$t->id,
            'dateLivrDemandeeParBB'=>$request->dateLivrDemandeeParBB
        ]);

        $createBdc = Bdc::create($request->all());
        return  $createBdc;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     * @SWG\Get(
     *     path="/api/bdcs/{id}",
     *     tags={"Bdcs"},
     *     summary="Get Bdc by Id",
     *     @SWG\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          type="integer",
     *          description="Display the specified Bdc by id.",
     * 		),
     *     @SWG\Response(
     *          response=200,
     *          description="Success: Return the Bdc",
     *          @SWG\Schema(ref="#/definitions/Bdc")
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
    public function show($id)//Bdc $Bdc)
    {

        $marchandises=TransitMarchandise::
        whereTransit_id($id)
        ->with('marchandise')
        ->whereState(1)
        ->get()
        ;
        $livraison=Livraison::
        select('dateLivrDemandeeParBB','etats_livraison_id','dateLivrEffectiveBB')
        ->whereTransit_id($id)
        ->get();
        $transit=Transit::
        with('societe')
        ->select('societe_id')
        ->findOrFail($id);
        $bdc=collect();
        $bdc->put('livraison',$livraison)
        ->put('marchandises',$marchandises)
        ->put('transit',$transit);
        return $bdc;

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     * @SWG\Put(
     *     path="/api/bdcs/{id}",
     *     tags={"Bdcs"},
     *     summary="Update Bdc",
     *     @SWG\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          type="integer",
     *          description="Update the specified Bdc by id.",
     * 		),
     *     @SWG\Parameter(
     * 			name="body",
     * 			in="body",
     * 			required=true,
     * 			@SWG\Schema(ref="#/definitions/Bdc"),
     * 			description="Json format",
     * 		),
     *     @SWG\Response(
     *          response=200,
     *          description="Success: Return the Bdc updated",
     *          @SWG\Schema(ref="#/definitions/Bdc")
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
            'societe_id' => 'required',
            'dateLivrDemandeeParBB' => 'required',
            'marchandises' => 'required'
            ]);
            
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);    
        }
        
        $updateBdcById = Self::show($id);

        $updateBdcById->update($request->all());

        return $updateBdcById;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     *     @SWG\Delete(
     *     path="/api/bdcs/{id}",
     *     tags={"Bdcs"},
     *     summary="Delete Bdc",
     *     description="Delete the specified Bdc by id",
     *     @SWG\Parameter(
     *         description="Bdc id to delete",
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
        $deleteBdcById = Bdc::find($id)->delete();
        return response()->json([], 204);
    }
}
