import { Transit } from '../transits/transit';
import { LieuxLivraison } from '../lieuxLivraisons/lieuxLivraison';
import { EtatsLivraisons } from '../etatsLivraisons/etatsLivraison';

export class Livraison {
  id: number;
  transit?: Transit;
  transit_id: number;
  etats_livraison_id: number;
  lieux_livraison_id: number;
  lieuLivraison?: LieuxLivraison;
  etatLivraison?: EtatsLivraisons;
  dateLivrDemandeeParBB: Date;
  dateReportApresEchecDeLivr: Date;
  dateComfirmationFournisseur: Date;
  dateLivrEffectiveBB: Date;
  dateDebStationnement: Date;
  dateDebSures: Date;
  delaiDateArrDateLivr: Date;
  nombreJourDeStationnementSubi: number;
  nombreJourSuresSubi: number;
  commentaires: string;
  data: Livraison;

  constructor(id?: number) {
    this.transit_id = id;
  }
}
