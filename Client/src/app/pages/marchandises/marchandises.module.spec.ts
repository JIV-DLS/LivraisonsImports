import { MarchandisesModule } from './marchandises.module';

describe('MarchandisesModule', () => {
  let marchandisesModule: MarchandisesModule;

  beforeEach(() => {
    marchandisesModule = new MarchandisesModule();
  });

  it('should create an instance', () => {
    expect(marchandisesModule).toBeTruthy();
  });
});
