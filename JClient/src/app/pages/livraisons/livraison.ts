import { Bike } from '../bikes/bike';

export class Livraison {
  id: number;
  name: string;
  description: string;
  location: string;
  bike?: Bike;

  constructor() {}
}
