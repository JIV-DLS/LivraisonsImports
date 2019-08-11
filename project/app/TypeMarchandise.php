<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

 /**
 * @SWG\Definition(
 *     definition="TypeMarchandise",
 *     required={"libelle"},
 *     @SWG\Property(
 *          property="libelle",
 *          type="string",
 *          description="libelle décrivant le type de la marchandise",
 *          example="fabrication bière"
 *    )
 * )
 */

class TypeMarchandise extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'type_marchandises';
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
    
    public function marchandise() {
        return $this->hasMany('App\Marchandise');
      }
}
