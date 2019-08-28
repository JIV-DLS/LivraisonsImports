import { Navire } from '../navires/navire';
import { Societe } from '../societes/societe';
import { Marchandise } from '../marchandises/marchandise';
import { Livraison } from '../livraisons/livraison';

export class Transit {
  id: number;
  navire?: Navire;
  navire_id: number;
  societe_id: number;
  marchandise_id:number;
  societe?: Societe;
  marchandise?: Marchandise;
  livraison?: Livraison;
  contenance: number;
  franchise: number;
  dateArrivee: Date;
  data: Transit;
  constructor(state?: Boolean) {
    this.navire_id = 0;
    this.societe_id = 0;
  }
}
