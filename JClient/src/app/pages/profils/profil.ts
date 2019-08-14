import { User } from '../auth/user';

export class Profil {
  id: number;
  libelle: string;
  users?: User;
  constructor() {}
}
