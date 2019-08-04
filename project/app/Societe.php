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
 *          property="adresse",
 *          type="string",
 *          description="Association with: builder_id",
 *          example="2"
 *    )
 * )
 */

class Societe extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'libelle',
        'adresse'
    ];

    /**
     * Relationship.
     *
     * @var string
     */

    public function adresse() {
      return $this->hasOne('App\Adresse');
    }
}
