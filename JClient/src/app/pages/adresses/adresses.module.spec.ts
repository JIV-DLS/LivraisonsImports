import { AdressesModule } from './adresses.module';

describe('AdressesModule', () => {
  let adressesModule: AdressesModule;

  beforeEach(() => {
    adressesModule = new AdressesModule();
  });

  it('should create an instance', () => {
    expect(adressesModule).toBeTruthy();
  });
});
