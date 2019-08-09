import { Bike } from '../bikes/bike';

export class Societe {
  id: number;
  name: string;
  description: string;
  location: string;
  bike?: Bike;

  constructor() {}
}
