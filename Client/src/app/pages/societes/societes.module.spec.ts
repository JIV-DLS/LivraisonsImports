import { SocietesModule } from './societes.module';

describe('SocietesModule', () => {
  let societesModule: SocietesModule;

  beforeEach(() => {
    societesModule = new SocietesModule();
  });

  it('should create an instance', () => {
    expect(societesModule).toBeTruthy();
  });
});
