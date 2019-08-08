<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

 /**
 * @SWG\Definition(
 *     definition="Marchandise",
 *     required={"libelle"},
 *     @SWG\Property(
 *          property="libelle",
 *          type="string",
 *          description="libelle décrivant la marchandise",
 *          example="Malta"
 *    ),
 *     @SWG\Property(
 *          property="typeMarchandise",
 *          type="string",
 *          description="type décrivant la marchandise",
 *          example="1"
 *    )
 * )
 */

class Marchandise extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'libelle',
        'typeMarchandise'
    ];

    /**
     * Relationship.
     *
     * @var string
     */
    
    public function transit() {
        return $this->belongsTo('App\Transit');
      }
    
    public function typeMarchandise() {
        return $this->hasOne('App\TypeMarchandise');
      }
}
