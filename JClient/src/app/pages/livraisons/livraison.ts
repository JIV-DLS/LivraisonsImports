import { Transit } from '../transits/transit';
import { LieuxLivraison } from '../lieuxLivraisons/lieuxLivraison';
import { EtatsLivraisons } from '../etatsLivraisons/etatsLivraison';

export class Livraison {
  id: number;
  transit?: Transit;
  lieuxLivraison?: LieuxLivraison;
  etatsLivraison?: EtatsLivraisons;
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

  constructor() {}
}
