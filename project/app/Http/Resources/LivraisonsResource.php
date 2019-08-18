<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class LivraisonsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            "transit" => $this->transit,
            "dateLivrDemandeeParBB"=> explode(" ",(string) $this->dateLivrDemandeeParBB)[0],
            "dateReportApresEchecDeLivr"=> explode(" ",(string) $this->dateReportApresEchecDeLivr)[0],
            "dateComfirmationFournisseur"=> explode(" ",(string) $this->dateConfirmationFournisseur)[0],
            "dateLivrEffectiveBB"=> explode(" ",(string) $this->dateLivrEffectiveBB)[0],
            "lieuLivraison"=>$this->lieuxLivraison,
            "dateDebStationnement"=> explode(" ",(string) $this->dateDebStationnement)[0],
            "dateDebSures"=> explode(" ",(string) $this->dateDebSures)[0],
            "nombreJourDeStationnementSubi"=>$this->nombreJourDeStationnementSubi,
            "nombreJourDeSuresSubi"=>$this->nombreJourDeSuresSubi,
            "delaiDateArrDateLivr"=>$this->delaiDateArrDateLivr,
            "etatLivraison"=>$this->etatsLivraison,
            "commentaires"=>$this->commentaires,
            // Casting objects to string, to avoid receive create_at and update_at as object
            'created_at' => (string) $this->created_at,
            'updated_at' => (string) $this->updated_at
        ]
        ;
        //parent::toArray($request);
    }
}
