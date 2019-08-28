<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

 /**
 * @SWG\Definition(
 *     definition="Transit",
 *     required={"navire_id","societe_id"},
 *     @SWG\Property(
 *          property="navire_id",
 *          type="string",
 *          description="designation décrivant le navire du Transit",
 *          example="1"
 *    ),
 *     @SWG\Property(
 *          property="contenance",
 *          type="string",
 *          description="designation décrivant la contenance du Transit",
 *          example="24"
 *    ),
 *     @SWG\Property(
 *          property="societe_id",
 *          type="string",
 *          description="designation décrivant le fournisseur du Transit",
 *          example="1"
 *    ),
 *     @SWG\Property(
 *          property="marchandise_id",
 *          type="string",
 *          description="designation décrivant la marchandise du Transit",
 *          example="1"
 *    ),
 *     @SWG\Property(
 *          property="dateArrivee",
 *          type="string",
 *          description="designation décrivant la date d'arrivée du Transit",
 *          example="2011/10/21"
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
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'transits';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'navire_id',
        'contenance',
        'societe_id',
        'marchandise_id',
        'dateArrivee',
        'franchise'
    ];

    /**
     * Relationship.
     *
     * @var string
     */
    
    public function livraison() {
        return $this->hasOne('App\Livraison');
      }
    
    public function societe() {
        return $this->belongsTo('App\Societe');
      }
    
    public function navire() {
        return $this->belongsTo('App\Navire');
      }
    
    public function marchandise() {
        return $this->belongsTo('App\Marchandise');
      }
}
