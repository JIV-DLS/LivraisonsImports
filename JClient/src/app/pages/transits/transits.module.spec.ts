import { TransitsModule } from './transits.module';

describe('TransitsModule', () => {
  let transitsModule: TransitsModule;

  beforeEach(() => {
    transitsModule = new TransitsModule();
  });

  it('should create an instance', () => {
    expect(transitsModule).toBeTruthy();
  });
});
