import { BuildersModule } from './adresses.module';

describe('BuildersModule', () => {
  let adressesModule: BuildersModule;

  beforeEach(() => {
    adressesModule = new BuildersModule();
  });

  it('should create an instance', () => {
    expect(adressesModule).toBeTruthy();
  });
});
