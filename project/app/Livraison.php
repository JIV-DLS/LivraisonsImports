<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

 /**
 * @SWG\Definition(
 *     definition="Livraison",
 *     required={"transit","dateLivrDemBB","dateLivrEffectiveBB","dateConfirmFourn","dateDebStationnement","dateDebSures","délaiDateArrDateLivr","etatLivr"},
 *     @SWG\Property(
 *          property="transit",
 *          type="string",
 *          description="designation décrivant le transit de la Livraison",
 *          example="3"
 *    ),
 *     @SWG\Property(
 *          property="dateLivrDemandeeParBB",
 *          type="string",
 *          description="designation décrivant la date de livraison demandée par la BB",
 *          example="24/04/2020"
 *    ),
 *     @SWG\Property(
 *          property="dateReportApresEchecDeLivr",
 *          type="string",
 *          description="designation décrivant la date de report suite à un échec de livraison",
 *          example="16/05/2020"
 *    ),
 *     @SWG\Property(
 *          property="dateConfirmFourn",
 *          type="string",
 *          description="designation décrivant la date de la comfirmation du fournisseur",
 *          example="25/04/2020"
 *    ),
 *     @SWG\Property(
 *          property="lieuLivr",
 *          type="string",
 *          description="designation décrivant le lieu de la Livraison",
 *          example="Lomé"
 *    ),
 *     @SWG\Property(
 *          property="dateLivrEffectiveBB",
 *          type="string",
 *          description="designation décrivant la date de livraison effective à la BB",
 *          example="16/10/2011"
 *    ),
 *     @SWG\Property(
 *          property="dateDebStationnement",
 *          type="string",
 *          description="designation décrivant la date de stationnement au port",
 *          example="16/10/2011"
 *    ),
 *     @SWG\Property(
 *          property="dateDebSures",
 *          type="string",
 *          description="designation décrivant le lieu de surestation",
 *          example="16/10/2011"
 *    ),
 *     @SWG\Property(
 *          property="nombreJourDeStationnementSub",
 *          type="string",
 *          description="designation décrivant le nombre de jour de stationnement subi par la Livraison",
 *          example="5"
 *    ),
 *     @SWG\Property(
 *          property="nombeJourSuresSubi",
 *          type="string",
 *          description="designation décrivant le nombre de jour de sures subi par la Livraison",
 *          example="3"
 *    ),
 *     @SWG\Property(
 *          property="délaiDateArrDateLivr",
 *          type="string",
 *          description="designation décrivant le délai entre la date d'arrivée et la date de livraison",
 *          example="7"
 *    ),
 *     @SWG\Property(
 *          property="etatLivr",
 *          type="string",
 *          description="designation décrivant l'état' de la Livraison",
 *          example="Livré"
 *    ),
 *     @SWG\Property(
 *          property="Commmentaires",
 *          type="string",
 *          description="designation décrivant les commentaires faits sur la Livraison",
 *          example="Liraison ayant eu problème alpha bêta et consort"
 *    )
 * )
 */

class Livraison extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'transit',
        'dateLivrDemandeeParBB',
        'dateReportApresEchecDeLivr',
        'dateConfirmFourn',
        'lieuLivr',
        'dateLivrEffectiveBB',
        'dateDebStationnement',
        'dateDebSures',
        'nombreJourDeStationnementSub',
        'délaiDateArrDateLivr',
        'etatLivr',
        'Commmentaires',
        'nombeJourSuresSubi'
    ];

    /**
     * Relationship.
     *
     * @var string
     */
    
    public function lieuxLivraison() {
        return $this->hasOne('App\LieuxLivraison');
      }
    
    public function etatsLivraison() {
        return $this->hasOne('App\EtatsLivraison');
      }
    
    public function transit() {
        return $this->hasOne('App\Transit');
      }
    
}
