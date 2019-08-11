import { Adresse } from '../adresses/adresse';

export class Employe {
  id: number;
  nom: string;
  prenom: string;
  dateNaiss: string;
  adresse?: Adresse;

  constructor() {}
}
