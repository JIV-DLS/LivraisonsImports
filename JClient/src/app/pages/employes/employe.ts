import { Adresse } from '../adresses/adresse';
import { User } from '../auth/user';

export class Employe {
  id: number;
  nom: string;
  prenom: string;
  dateNaiss: string;
  adresse?: Adresse;
  user?: User;
  constructor() {}
}
