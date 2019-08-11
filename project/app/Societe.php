<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

 /**
 * @SWG\Definition(
 *     definition="Societe",
 *     required={"nom", "prenom", "dateNaiss", "adresse"},
 *     @SWG\Property(
 *          property="libelle",
 *          type="string",
 *          description="libelle de la société",
 *          example="GRAAL, HI-TECH"
 *    ),
 *     @SWG\Property(
 *          property="adresse_id",
 *          type="string",
 *          description="Association with: builder_id",
 *          example="2"
 *    )
 * )
 */

class Societe extends Model
{
  /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'societes';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'libelle',
        'adresse_id'
    ];

    /**
     * Relationship.
     *
     * @var string
     */

    public function adresse() {
      return $this->belongsTo('App\Adresse');
    }

    public function transit() {
      return $this->hasMany('App\Transit');
    }
}
