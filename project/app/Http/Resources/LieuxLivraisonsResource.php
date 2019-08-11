<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class LieuxLivraisonResource extends JsonResource
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
            "libelle" => $this->libelle,
            // Casting objects to string, to avoid receive create_at and update_at as object
            'created_at' => (string) $this->created_at,
            'updated_at' => (string) $this->updated_at
        ]
        ;
        //parent::toArray($request);
    }
}
