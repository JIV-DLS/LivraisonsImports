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
            "dateLivrDemandeeParBB"=> (string) $this->dateLivrDemandeeParBB,
            "dateReportApresEchecDeLivr"=> (string) $this->dateReportApresEchecDeLivr,
            "dateComfirmationFournisseur"=> (string) $this->dateComfirmationFournisseur,
            "dateLivrEffectiveBB"=> (string) $this->dateLivrEffectiveBB,
            "lieuLivraison"=>$this->lieuxLivraison,
            "dateDebStationnement"=> (string) $this->dateDebStationnement,
            "dateDebSures"=> (string) $this->dateDebSures,
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
