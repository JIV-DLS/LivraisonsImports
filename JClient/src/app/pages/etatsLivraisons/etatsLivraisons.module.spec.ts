import { EtatsLivraisonssModule } from './etatsLivraisonss.module';

describe('EtatsLivraisonssModule', () => {
  let etatsLivraisonssModule: EtatsLivraisonssModule;

  beforeEach(() => {
    etatsLivraisonssModule = new EtatsLivraisonssModule();
  });

  it('should create an instance', () => {
    expect(etatsLivraisonssModule).toBeTruthy();
  });
});
