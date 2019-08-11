<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

 /**
 * @SWG\Definition(
 *     definition="Navire",
 *     required={"libelle","contenanceTotale"},
 *     @SWG\Property(
 *          property="libelle",
 *          type="string",
 *          description="libelle décrivant le Navire",
 *          example="Malt"
 *    ),
 *     @SWG\Property(
 *          property="contenanceTotale",
 *          type="string",
 *          description="libelle décrivant le Navire",
 *          example="Malt"
 *    )
 * )
 */

class Navire extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'navires';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'libelle',
        'contenanceTotale'
    ];

    /**
     * Relationship.
     *
     * @var string
     */
    
    public function transit() {
        return $this->hasMany('App\Transit');
      }
}
