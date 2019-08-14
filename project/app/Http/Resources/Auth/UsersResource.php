<?php

namespace App\Http\Resources\Auth;

use Illuminate\Http\Resources\Json\JsonResource;
use App\User;

class UsersResource extends JsonResource
{
  /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // dd($request);
        return 
        [
            'id' => $this->id,
            "name" => $this->name,
            "email"=>$this->email,
            "state"=>$this->state,
            "emailVerifiedAt"=>$this->emailVerifiedAt,
            "rememberToken"=>$this->rememberToken,
            "employe"=>$this->employe,
            "profil"=>$this->profil,
            // Casting objects to string, to avoid receive create_at and update_at as object
            'created_at' => (string) $this->created_at,
            'updated_at' => (string) $this->updated_at
        ]
        ;
        //parent::toArray($request);
    }
}
