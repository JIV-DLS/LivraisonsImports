<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

 /**
 * @SWG\Definition(
 *     definition="ReinitialiserMotDePasse",
 *     required={"email","token"},
 *     @SWG\Property(
 *          property="email",
 *          type="string",
 *          description="email de l'utilisateur qui veut réinitialiser son mot de passe",
 *          example="inconnu@gmail.com"
 *    ),
 *     @SWG\Property(
 *          property="token",
 *          type="string",
 *          description="token enregistré lors du changement du mot de passe",
 *          example="gHYC676Nj8Hj7è8nbhyuèNuydRcVJhbyUy76èHnbHUY879NPOsqk"
 *    )
 * )
 */

class ReinitialiserMotDePasse extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'email',
        'token'
    ];

    /**
     * Relationship.
     *
     * @var string
     */
    
    public function user() {
        return $this->belongsTo('App\User');
      }
}
