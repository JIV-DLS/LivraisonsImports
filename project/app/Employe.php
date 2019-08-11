<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

 /**
 * @SWG\Definition(
 *     definition="Employe",
 *     required={"nom", "prenom", "dateNaiss", "adresse_id"},
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
 *          example="2009/23/05, 2008/23/11, 2007/09/06"
 *    ),
 *     @SWG\Property(
 *          property="adresse_id",
 *          type="integer",
 *          description="Association with: adresse",
 *          example="2"
 *    )
 * )
 */

class Employe extends Model
{
  /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'employes';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nom',
        'prenom',
        'dateNaiss',
        'adresse_id'
    ];

    /**
     * Relationship.
     *
     * @var string
     */
    
    public function user() {
        return $this->hasOne('App\User');
      }
    public function adresse() {
      // dd($this->hasOne('App\Adresse'));
      return $this->belongsTo('App\Adresse');
    }
}
