import { TypeMarchandise } from '../typeMarchandises/typeMarchandise';
import { Transit } from '../transits/transit';

export class Marchandise {
  id: number;
  libelle: string;
  typeMarchandise?: TypeMarchandise;
  transits: Transit;

  constructor(marchandise?: Marchandise) {
    this.id = marchandise.id;
    this.libelle = marchandise.libelle;
    this.typeMarchandise = marchandise.typeMarchandise;
    this.transits = marchandise.transits;
  }
}
