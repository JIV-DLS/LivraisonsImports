import { ReinitialiserMotDePassessModule } from './reinitialiserMotDePassess.module';

describe('ReinitialiserMotDePassessModule', () => {
  let reinitialiserMotDePassessModule: ReinitialiserMotDePassessModule;

  beforeEach(() => {
    reinitialiserMotDePassessModule = new ReinitialiserMotDePassessModule();
  });

  it('should create an instance', () => {
    expect(reinitialiserMotDePassessModule).toBeTruthy();
  });
});
