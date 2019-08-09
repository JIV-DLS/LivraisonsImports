import { Component, OnInit } from '@angular/core';

// App imports
import { EtatsLivraisons } from './../etatsLivraison';
import { EtatsLivraisonssService } from '../_services/etatsLivraisons.service';

@Component({
  selector: 'app-etatsLivraisons-list',
  templateUrl: './etatsLivraisons-list.component.html',
  styleUrls: ['./etatsLivraisons-list.component.scss']
})
export class EtatsLivraisonsListComponent implements OnInit {
    // Using EtatsLivraisons Model class
    etatsLivraisonss: EtatsLivraisons[];
    isLoading: Boolean = false;

  constructor(private etatsLivraisonsService: EtatsLivraisonssService) { }

  ngOnInit() {
    // Get etatsLivraisons detail
    this.getEtatsLivraisonss();
  }

  getEtatsLivraisonss(): void {
    this.isLoading = true;
    this.etatsLivraisonsService.getEtatsLivraisonss()
      .subscribe(
        response => this.handleResponse(response),
        error => this.handleError(error));
  }

  protected handleResponse(response: EtatsLivraisons[]) {
    this.isLoading = false,
    this.etatsLivraisonss = response;
  }
  protected handleError(error: any) {
    this.isLoading = false,
    console.error(error);
  }


}
