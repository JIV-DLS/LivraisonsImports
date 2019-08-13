import { Societe } from '../societes/societe';
import { Employe } from '../employes/employe';

export class Adresse {
  id: number;
  rue: string;
  quartier: string;
  arrondissement: string;
  ville: string;
  region: string;
  pays: string;
  employe?: Employe;
  societe?: Societe;
  constructor() {}
}
