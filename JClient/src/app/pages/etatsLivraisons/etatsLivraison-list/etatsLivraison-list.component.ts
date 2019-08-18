import { Component, OnInit } from '@angular/core';

// App imports
import { EtatsLivraisons } from './../etatsLivraison';
import { EtatsLivraisonssService } from '../_services/etatsLivraisons.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-etatsLivraison-list',
  templateUrl: './etatsLivraison-list.component.html',
  styleUrls: ['./etatsLivraison-list.component.scss']
})
export class EtatsLivraisonListComponent implements OnInit {
    // Using EtatsLivraison Model class
    etatsLivraisons: EtatsLivraisons[];
    isLoading: Boolean = false;
 
  constructor(private etatsLivraisonService: EtatsLivraisonssService,private router: Router) { }

  ngOnInit() {
    // Get etatsLivraison detail
    this.getEtatsLivraisons();
  }

  getEtatsLivraisons(): void {
    this.isLoading = true;
    this.etatsLivraisonService.getEtatsLivraisonss()
      .subscribe(
        response => this.handleResponse(response),
        error => this.handleError(error));
  }

  protected handleResponse(response: EtatsLivraisons[]) {
    this.isLoading = false,
    this.etatsLivraisons = response;
  }
  protected handleError(error: any) {
    this.isLoading = false,
    console.error(error);
  }


}
