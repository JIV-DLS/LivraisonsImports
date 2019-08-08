import { Bike } from '../bikes/bike';

export class Employe {
  id: number;
  name: string;
  description: string;
  location: string;
  bike?: Bike;

  constructor() {}
}
