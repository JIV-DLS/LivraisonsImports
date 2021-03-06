<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Employe;
use Validator;
use App\Http\Resources\EmployesResource;
use Illuminate\Support\Facades\DB;

class EmployeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     *
     * @SWG\Get(
     *     path="/api/employesNotRelated",
     *     tags={"Employes"},
     *     summary="List Employes whos are not related",
     *     @SWG\Response(
     *          response=200,
     *          description="Success: List all Employes who are not related",
     *          @SWG\Schema(ref="#/definitions/Employe")
     *      ),
     *     @SWG\Response(
     *          response="404",
     *          description="Not Found"
     *   )
     * ),
     */
    public function allNotRelated()
    {
        $listEmploye = DB::select("SELECT  employes.id,employes.nom,employes.prenom,employes.dateNaiss  FROM    employes LEFT JOIN users t1 ON      t1.employe_id = employes.id  WHERE   t1.employe_id IS NULL");
        return $listEmploye;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     *
     * @SWG\Get(
     *     path="/api/employes",
     *     tags={"Employes"},
     *     summary="List Employes",
     *     @SWG\Response(
     *          response=200,
     *          description="Success: List all Employes",
     *          @SWG\Schema(ref="#/definitions/Employe")
     *      ),
     *     @SWG\Response(
     *          response="404",
     *          description="Not Found"
     *   )
     * ),
     */
    public function index()
    {
        $listEmploye = Employe::all();
        return $listEmploye;
    }

    /**
     * Jean-Claude
     */

    public function adresse_id(Request $r)
    {
        $l = DB::select("SELECT * from employes
        WHERE adresse_id = ?", 
        [$r->id]);
        return response()->json($l, 200);
    }


    public function nom(Request $r)
    {
        $l = DB::select("SELECT * from employes 
        WHERE nom LIKE '".$r->data."%'", 
        []);

        return response()->json($l, 200);
    }

    public function prenom(Request $r)
    {
        $l = DB::select("SELECT * from employes 
        WHERE prenom LIKE '".$r->data."%'", 
        []);

        return response()->json($l, 200);
    }

    public function dateNaiss(Request $r)
    {
        $l = DB::select("SELECT * from employes
        WHERE dateNaiss >= ? and dateNaiss <= ?", 
        [$r->dateDebut, $r->dateFin]);
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
     *     path="/api/employes",
     *     tags={"Employes"},
     *     summary="Create Employe",
     *     @SWG\Parameter(
     * 			name="body",
     * 			in="body",
     * 			required=true,
     * 			@SWG\Schema(ref="#/definitions/Employe"),
     * 			description="Json format",
     * 		),
     *     @SWG\Response(
     *          response=201,
     *          description="Success: A Newly Created Employe",
     *          @SWG\Schema(ref="#/definitions/Employe")
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
            'nom' => 'required',
            'dateNaiss' => 'required',
            'adresse_id' => 'required',
            // 'dateNaiss'=>'required',
            'prenom' => 'required'
            ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);    
        }
        $createEmploye = Employe::create($request->all());
        return  $createEmploye;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     * @SWG\Get(
     *     path="/api/employes/{id}",
     *     tags={"Employes"},
     *     summary="Get Employe by Id",
     *     @SWG\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          type="integer",
     *          description="Display the specified Employe by id.",
     * 		),
     *     @SWG\Response(
     *          response=200,
     *          description="Success: Return the Employe",
     *          @SWG\Schema(ref="#/definitions/Employe")
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
    public function show($id)//Employe $Employe)
    {
        // $showEmployeById = Employe::with('Employe')->findOrFail($id);
        // return $showEmployeById;
        return new EmployesResource(Employe::with('Adresse')->with('User')->findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     * @SWG\Put(
     *     path="/api/employes/{id}",
     *     tags={"Employes"},
     *     summary="Update Employe",
     *     @SWG\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          type="integer",
     *          description="Update the specified Employe by id.",
     * 		),
     *     @SWG\Parameter(
     * 			name="body",
     * 			in="body",
     * 			required=true,
     * 			@SWG\Schema(ref="#/definitions/Employe"),
     * 			description="Json format",
     * 		),
     *     @SWG\Response(
     *          response=200,
     *          description="Success: Return the Employe updated",
     *          @SWG\Schema(ref="#/definitions/Employe")
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
            'nom' => 'required',
            'dateNaiss' => 'required',
            'adresse_id' => 'required',
            // 'dateNaiss'=>'required',
            'prenom' => 'required'
            ]);
            
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);    
        }
        
        $updateEmployeById = Employe::findOrFail($id);
        $updateEmployeById->update($request->all());

        return $updateEmployeById;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     *     @SWG\Delete(
     *     path="/api/employes/{id}",
     *     tags={"Employes"},
     *     summary="Delete Employe",
     *     description="Delete the specified Employe by id",
     *     @SWG\Parameter(
     *         description="Employe id to delete",
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
        $deleteEmployeById = Employe::find($id)->delete();
        return response()->json([], 204);
    }
}
