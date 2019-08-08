import { EmployesModule } from './employes.module';

describe('EmployesModule', () => {
  let employesModule: EmployesModule;

  beforeEach(() => {
    employesModule = new EmployesModule();
  });

  it('should create an instance', () => {
    expect(employesModule).toBeTruthy();
  });
});
