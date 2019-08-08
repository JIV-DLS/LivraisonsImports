import { LieuxLivraisonsModule } from './lieuxLivraisons.module';

describe('LieuxLivraisonsModule', () => {
  let lieuxLivraisonsModule: LieuxLivraisonsModule;

  beforeEach(() => {
    lieuxLivraisonsModule = new LieuxLivraisonsModule();
  });

  it('should create an instance', () => {
    expect(lieuxLivraisonsModule).toBeTruthy();
  });
});
