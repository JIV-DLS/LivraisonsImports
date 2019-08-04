<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

 /**
 * @SWG\Definition(
 *     definition="Action",
 *     required={"libelle","utilisateur"},
 *     @SWG\Property(
 *          property="libelle",
 *          type="string",
 *          description="libelle décrivant l'action effectuée",
 *          example="insertion dans la table employe"
 *    ) ,
 *     @SWG\Property(
 *          property="utilisateur",
 *          type="string",
 *          description="utilisateur effectuant l'action décrit",
 *          example="2"
 *    )
 * )
 */

class Action extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'libelle',
        'utilisateur'
    ];

    /**
     * Relationship.
     *
     * @var string
     */
    
    public function utilisateur() {
        return $this->belongsTo('App\Utilisateur');
      }
}
