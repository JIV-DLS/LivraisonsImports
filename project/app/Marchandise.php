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
 *          property="type_marchandise_id",
 *          type="string",
 *          description="type décrivant la marchandise",
 *          example="1"
 *    )
 * )
 */

class Marchandise extends Model
{
  /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'marchandises';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'libelle',
        'type_marchandise_id'
    ];

    /**
     * Relationship.
     *
     * @var string
     */
    
    public function transit() {
        return $this->hasMany('App\Transit');
      }
    
    public function typeMarchandise() {
        return $this->belongsTo('App\TypeMarchandise');
      }
}
