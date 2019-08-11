<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

 /**
 * @SWG\Definition(
 *     definition="LieuxLivraison",
 *     required={"libelle"},
 *     @SWG\Property(
 *          property="libelle",
 *          type="string",
 *          description="libelle décrivant le lieux de la livraison",
 *          example="Grande entrée"
 *    )
 * )
 */

class LieuxLivraison extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'lieux_livraisons';
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
    
    public function livraison() {
        return $this->hasMany('App\Livraison');
      }
}
