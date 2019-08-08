import { Bike } from '../bikes/bike';

export class Navire {
  id: number;
  name: string;
  description: string;
  location: string;
  bike?: Bike;

  constructor() {}
}
