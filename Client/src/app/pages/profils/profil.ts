import { Bike } from '../bikes/bike';

export class Profil {
  id: number;
  name: string;
  description: string;
  location: string;
  bike?: Bike;

  constructor() {}
}
