import { LivraisonsModule } from './livraisons.module';

describe('LivraisonsModule', () => {
  let livraisonsModule: LivraisonsModule;

  beforeEach(() => {
    livraisonsModule = new LivraisonsModule();
  });

  it('should create an instance', () => {
    expect(livraisonsModule).toBeTruthy();
  });
});
