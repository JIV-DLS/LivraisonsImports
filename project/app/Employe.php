<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

 /**
 * @SWG\Definition(
 *     definition="Employe",
 *     required={"nom", "prenom", "dateNaiss", "adresse"},
 *     @SWG\Property(
 *          property="nom",
 *          type="string",
 *          description="nom de l'employé",
 *          example="VLAMISKOT, DJEALE"
 *    ),
 *     @SWG\Property(
 *          property="prenom",
 *          type="string",
 *          description="prenom de l'employé",
 *          example="komi, Jack, Jessica"
 *    ),
 *     @SWG\Property(
 *          property="dateNaiss",
 *          type="Date",
 *          description="date de naissance de l'employé",
 *          example="23/05/2009, 23/11/2008, 09/06/2007"
 *    ),
 *     @SWG\Property(
 *          property="adresse",
 *          type="string",
 *          description="Association with: builder_id",
 *          example="2"
 *    )
 * )
 */

class Employe extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nom',
        'prenom',
        'dateaiss',
        'adresse'
    ];

    /**
     * Relationship.
     *
     * @var string
     */
    
    public function user() {
        return $this->belongsTo('App\User');
      }
    public function adresse() {
      return $this->hasOne('App\Adresse');
    }
}
