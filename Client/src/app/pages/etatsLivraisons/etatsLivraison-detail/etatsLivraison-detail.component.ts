import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// App imports
import { EtatsLivraisons } from './../etatsLivraisons';
import { EtatsLivraisonssService } from '../_services/etatsLivraisonss.service';

@Component({
  selector: 'app-etatsLivraisons-detail',
  templateUrl: './etatsLivraisons-detail.component.html',
  styleUrls: ['./etatsLivraisons-detail.component.scss']
})
export class EtatsLivraisonsDetailComponent implements OnInit {

  etatsLivraisons: EtatsLivraisons;
  isLoading: Boolean = false;

  constructor(
    private etatsLivraisonssService: EtatsLivraisonssService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // Get etatsLivraisons detail
    this.getEtatsLivraisonsDetail();
  }

  getEtatsLivraisonsDetail(): void {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.etatsLivraisonssService.getEtatsLivraisonsDetail(id)
      .subscribe(etatsLivraisons => {
        this.isLoading = false;
        this.etatsLivraisons = etatsLivraisons['data'];
      });
  }

}
