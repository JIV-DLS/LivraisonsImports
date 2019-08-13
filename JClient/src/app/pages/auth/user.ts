import { Employe } from '../employes/employe';
import { Profil } from '../profils/profil';

export class User {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  employe?: Employe;
  profil?: Profil;

  constructor() {}

}
