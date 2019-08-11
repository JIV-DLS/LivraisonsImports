<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

 /**
 * @SWG\Definition(
 *     definition="Action",
 *     required={"libelle","user_id"},
 *     @SWG\Property(
 *          property="libelle",
 *          type="string",
 *          description="libelle décrivant l'action effectuée",
 *          example="insertion dans la table employe"
 *    ) ,
 *     @SWG\Property(
 *          property="user_id",
 *          type="string",
 *          description="utilisateur effectuant l'action décrit",
 *          example="2"
 *    )
 * )
 */

class Action extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'actions';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'libelle',
        'user_id'
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
