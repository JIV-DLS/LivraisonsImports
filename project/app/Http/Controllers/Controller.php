<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    public function selectCollectionJson($array,$add,$t=null)
    {
        return $t? collect($array):response()->json($array, 200);
    }
    function grouper($info)
    {
        if($info->count()==0)return $info;
       $nOb['transit_id']=$info[0]? $info[0]->transit_id:null;
       $nOb['liv_id']=$info[0]? $info[0]->transit_id:null;
        foreach ($info as $key => $value) {
            $marchandises[$key]=[
                'id'=>$value->id,
                'marchandise_id'=>$value->marchandise_id,
                'libelle'=>$value->libelle,
                'quantite'=> $value->quantite
            ] ;
        }

        $nOb['marchandises']=$marchandises;
        return  $nOb;
    }
}
