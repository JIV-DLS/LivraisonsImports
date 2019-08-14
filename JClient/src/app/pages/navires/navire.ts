import { Transit } from '../transits/transit';

export class Navire {
  id: number;
  libelle: string;
  contenanceTotale: number;
  transits: Transit;
  constructor() {}
}
