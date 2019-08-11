import { Navire } from '../navires/navire';
import { Societe } from '../societes/societe';
import { Marchandise } from '../marchandises/marchandise';

export class Transit {
  id: number;
  navire?: Navire;
  fournisseur?: Societe;
  marchandise?: Marchandise;
  contenance: number;
  franchise: number;
  dateArrivee: Date;
  constructor() {}
}
