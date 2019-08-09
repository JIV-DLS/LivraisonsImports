import { Bike } from '../bikes/bike';

export class TypeMarchandise {
  id: number;
  name: string;
  description: string;
  location: string;
  bike?: Bike;

  constructor() {}
}
