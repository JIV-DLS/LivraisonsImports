<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

 /**
 * @SWG\Definition(
 *     definition="Transit",
 *     required={"navire","fournisseur","marchandise","dateArrivee","franchise"},
 *     @SWG\Property(
 *          property="navire",
 *          type="string",
 *          description="designation décrivant le navire du Transit",
 *          example="Malt"
 *    ),
 *     @SWG\Property(
 *          property="contenance",
 *          type="string",
 *          description="designation décrivant la contenance du Transit",
 *          example="24"
 *    ),
 *     @SWG\Property(
 *          property="fournisseur",
 *          type="string",
 *          description="designation décrivant le fournisseur du Transit",
 *          example="Hi-tech"
 *    ),
 *     @SWG\Property(
 *          property="marchandise",
 *          type="string",
 *          description="designation décrivant la marchandise du Transit",
 *          example="Malta"
 *    ),
 *     @SWG\Property(
 *          property="dateArrivee",
 *          type="string",
 *          description="designation décrivant la date d'arrivée du Transit",
 *          example="16/10/2011"
 *    ),
 *     @SWG\Property(
 *          property="franchise",
 *          type="string",
 *          description="designation décrivant la franchise du Transit",
 *          example="27"
 *    )
 * )
 */

class Transit extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'navire',
        'contenance',
        'fournisseur',
        'marchandise',
        'dateArrivee',
        'franchise'
    ];

    /**
     * Relationship.
     *
     * @var string
     */
    
    public function livraison() {
        return $this->belongsTo('App\Livraison');
      }
    
    public function fournisseur() {
        return $this->hasOne('App\Societe');
      }
    
    public function navire() {
        return $this->hasOne('App\Navire');
      }
    
    public function marchandise() {
        return $this->hasOne('App\Marchandise');
      }
}
