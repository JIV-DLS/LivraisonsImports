<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

 /**
 * @SWG\Definition(
 *     definition="Profil",
 *     required={"libelle"},
 *     @SWG\Property(
 *          property="libelle",
 *          type="string",
 *          description="libelle décrivant le profil",
 *          example="Root"
 *    )
 * )
 */

class Profil extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'profils';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'libelle'
    ];

    /**
     * Relationship.
     *
     * @var string
     */
    
    public function user() {
        return $this->hasMany('App\User');
      }
}
