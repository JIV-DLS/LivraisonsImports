import { TypeMarchandisesModule } from './typeMarchandises.module';

describe('TypeMarchandisesModule', () => {
  let typeMarchandisesModule: TypeMarchandisesModule;

  beforeEach(() => {
    typeMarchandisesModule = new TypeMarchandisesModule();
  });

  it('should create an instance', () => {
    expect(typeMarchandisesModule).toBeTruthy();
  });
});
