import { Bike } from '../bikes/bike';

export class EtatsLivraisons {
  id: number;
  name: string;
  description: string;
  location: string;
  bike?: Bike;

  constructor() {}
}
