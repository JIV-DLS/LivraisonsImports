import { TypeMarchandise } from '../typeMarchandises/typeMarchandise';

export class Marchandise {
  id: number;
  libelle: string;
  typeMarchandise?: TypeMarchandise;

  constructor() {}
}
