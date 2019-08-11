import { Adresse } from '../adresses/adresse';

export class Societe {
  id: number;
  libelle: string;
  adresse?: Adresse;
  constructor() {}
}
