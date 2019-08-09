import { ProfilsModule } from './profils.module';

describe('ProfilsModule', () => {
  let profilsModule: ProfilsModule;

  beforeEach(() => {
    profilsModule = new ProfilsModule();
  });

  it('should create an instance', () => {
    expect(profilsModule).toBeTruthy();
  });
});
