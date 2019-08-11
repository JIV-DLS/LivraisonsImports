<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

 /**
 * @SWG\Definition(
 *     definition="Livraison",
 *     required={"transit_id","dateLivrDemandeeParBB","dateLivrEffectiveBB","dateConfirmationFournisseur","dateDebStationnement","dateDebSures","delaiDateArrDateLivr","etatLivr"},
 *     @SWG\Property(
 *          property="transit_id",
 *          type="string",
 *          description="designation décrivant le transit de la Livraison",
 *          example="1"
 *    ),
 *     @SWG\Property(
 *          property="dateLivrDemandeeParBB",
 *          type="string",
 *          description="designation décrivant la date de livraison demandée par la BB",
 *          example="2020/02/24"
 *    ),
 *     @SWG\Property(
 *          property="dateReportApresEchecDeLivr",
 *          type="string",
 *          description="designation décrivant la date de report suite à un échec de livraison",
 *          example="2020/6/05"
 *    ),
 *     @SWG\Property(
 *          property="dateConfirmationFournisseur",
 *          type="string",
 *          description="designation décrivant la date de la comfirmation du fournisseur",
 *          example="2020/04/25"
 *    ),
 *     @SWG\Property(
 *          property="lieux_livraison_id",
 *          type="string",
 *          description="designation décrivant le lieu de la Livraison",
 *          example="1"
 *    ),
 *     @SWG\Property(
 *          property="dateLivrEffectiveBB",
 *          type="string",
 *          description="designation décrivant la date de livraison effective à la BB",
 *          example="2020/10/16"
 *    ),
 *     @SWG\Property(
 *          property="dateDebStationnement",
 *          type="string",
 *          description="designation décrivant la date de stationnement au port",
 *          example="2011/10/16"
 *    ),
 *     @SWG\Property(
 *          property="dateDebSures",
 *          type="string",
 *          description="designation décrivant le lieu de surestation",
 *          example="2011/10/16"
 *    ),
 *     @SWG\Property(
 *          property="nombreJourDeStationnementSubi",
 *          type="string",
 *          description="designation décrivant le nombre de jour de stationnement subi par la Livraison",
 *          example="5"
 *    ),
 *     @SWG\Property(
 *          property="nombreJourDeSuresSubi",
 *          type="string",
 *          description="designation décrivant le nombre de jour de sures subi par la Livraison",
 *          example="3"
 *    ),
 *     @SWG\Property(
 *          property="delaiDateArrDateLivr",
 *          type="string",
 *          description="designation décrivant le délai entre la date d'arrivée et la date de livraison",
 *          example="2020/10/16"
 *    ),
 *     @SWG\Property(
 *          property="etats_livraison_id",
 *          type="string",
 *          description="designation décrivant l'état' de la Livraison",
 *          example="1"
 *    ),
 *     @SWG\Property(
 *          property="commentaires",
 *          type="string",
 *          description="designation décrivant les commentaires faits sur la Livraison",
 *          example="probleme de qualite du livreur(societe)"
 *    )
 * )
 */

class Livraison extends Model
{
  /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'livraisons';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'transit_id',
        'dateLivrDemandeeParBB',
        'dateReportApresEchecDeLivr',
        'dateConfirmationFournisseur',
        'lieux_livraison_id',
        'dateLivrEffectiveBB',
        'dateDebStationnement',
        'dateDebSures',
        'nombreJourDeStationnementSubi',
        'delaiDateArrDateLivr',
        'etats_livraison_id',
        'commentaires',
        'nombreJourDeSuresSubi'
    ];

    /**
     * Relationship.
     *
     * @var string
     */
    
    public function lieuxLivraison() {
        return $this->belongsTo('App\LieuxLivraison');
      }
    
    public function etatsLivraison() {
        return $this->belongsTo('App\EtatsLivraison');
      }
    
    public function transit() {
        return $this->belongsTo('App\Transit');
      }
    
}
