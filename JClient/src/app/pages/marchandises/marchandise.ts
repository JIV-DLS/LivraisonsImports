import { TypeMarchandise } from '../typeMarchandises/typeMarchandise';
import { Transit } from '../transits/transit';

export class Marchandise {
  id: number;
  libelle: string;
  typeMarchandise?: TypeMarchandise;
  transits: Transit;

  constructor() {}
}
