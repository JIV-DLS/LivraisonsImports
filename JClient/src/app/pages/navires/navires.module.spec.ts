import { NaviresModule } from './navires.module';

describe('NaviresModule', () => {
  let naviresModule: NaviresModule;

  beforeEach(() => {
    naviresModule = new NaviresModule();
  });

  it('should create an instance', () => {
    expect(naviresModule).toBeTruthy();
  });
});
