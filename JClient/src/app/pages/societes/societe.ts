import { Adresse } from '../adresses/adresse';
import { Transit } from '../transits/transit';

export class Societe {
  id: number;
  libelle: string;
  adresse?: Adresse;
  transits?: Transit;
  constructor() {}
}
