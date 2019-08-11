<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

 /**
 * @SWG\Definition(
 *     definition="Adresse",
 *     required={"ville", "pays"},
 *     @SWG\Property(
 *          property="ville",
 *          type="string",
 *          description="Ville dans laquelle se trouve l'employé ou la société",
 *          example="Kara,Lomé"
 *    ),
 *     @SWG\Property(
 *          property="pays",
 *          type="string",
 *          description="Pays dans lequel se trouve l'employé ou la société",
 *          example="Togo,Ghana"
 *    ),
 *     @SWG\Property(
 *          property="rue",
 *          type="string",
 *          description="N° Rue",
 *          example="rue centrale 332"
 *    ),
 *     @SWG\Property(
 *          property="quartier",
 *          type="string",
 *          description="quartier",
 *          example="Tokoin-Gbadago"
 *    ),
 *     @SWG\Property(
 *          property="arrondissement",
 *          type="string",
 *          description="arrondissement",
 *          example="arrondissement 5eme"
 *    ),
 *    @SWG\Property(
 *          property="region",
 *          type="string",
 *          description="région",
 *          example="Maritime"
 *    )
 * )
 */

class Adresse extends Model
{
  /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'adresses';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'rue',
        'quartier',
        'arrondissement',
        'ville',
        'region',
        'pays'
    ];

    /**
     * Relationship.
     *
     * @var string
     */

    public function Employe() {
      //dd($this->belongsTo('App\Employe'));
      return $this->hasOne('App\Employe');
    }

    public function Societe() {
      return $this->hasOne('App\Societe');
    }
}
