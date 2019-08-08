import { Bike } from '../bikes/bike';

export class Marchandise {
  id: number;
  name: string;
  description: string;
  location: string;
  bike?: Bike;

  constructor() {}
}
