import { ReinitialiserMotDePassessModule } from './reinitialiserMotDePasses.module';

describe('ReinitialiserMotDePassessModule', () => {
  let reinitialiserMotDePassessModule: ReinitialiserMotDePassessModule;

  beforeEach(() => {
    reinitialiserMotDePassessModule = new ReinitialiserMotDePassessModule();
  });

  it('should create an instance', () => {
    expect(reinitialiserMotDePassessModule).toBeTruthy();
  });
});
