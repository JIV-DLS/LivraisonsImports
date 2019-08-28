<?php


namespace App;

use Illuminate\Database\Eloquent\Model;

 /**
 * @SWG\Definition(
 *     definition="transitMarchandise",
 *     required={"transit_id","marchandise_id","quantite"},
 *     @SWG\Property(
 *          property="transit_id",
 *          type="string",
 *          description="designation décrivant le transit du qui a apporté la quantité de marchandise en question",
 *          example="1"
 *    ),
 *     @SWG\Property(
 *          property="marchandise_id",
 *          type="string",
 *          description="designation décrivant la marchandise qui a été transitée",
 *          example="1"
 *    ),
 *     @SWG\Property(
 *          property="quantité",
 *          type="string",
 *          description="designation décrivant la quantité de marchandise qui a été transité",
 *          example="1"
 *    )
 * )
 */

class transitMarchandise extends Model
{
  /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'transit_marchandises';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'transit_id',
        'marchandise_id',
        'quantite',
        'state'
    ];

    /**
     * Relationship.
     *
     * @var string
     */
    
    public function transit() {
      // dd($this->belongsTo('App\Transit'));
        return $this->belongsTo('App\Transit');
      }
    
    public function marchandise() {
        return $this->belongsTo('App\Marchandise');
      }
}
