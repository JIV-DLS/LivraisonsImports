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
 *          property="contenaceTotale",
 *          type="string",
 *          description="libelle décrivant le Navire",
 *          example="Malt"
 *    )
 * )
 */

class Navire extends Model
{
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
    
    public function transit() {
        return $this->belongsTo('App\Transit');
      }
}
