<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

 /**
 * @SWG\Definition(
 *     definition="EtatsLivraison",
 *     required={"libelle"},
 *     @SWG\Property(
 *          property="libelle",
 *          type="string",
 *          description="libelle décrivant l'état de la livraon",
 *          example="Livré, Attente"
 *    )
 * )
 */

class EtatsLivraison extends Model
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
    
    public function livraison() {
        return $this->belongsTo('App\Livraison');
      }
}
