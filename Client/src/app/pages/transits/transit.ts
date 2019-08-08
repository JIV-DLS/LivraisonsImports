import { Bike } from '../bikes/bike';

export class Transit {
  id: number;
  name: string;
  description: string;
  location: string;
  bike?: Bike;

  constructor() {}
}
