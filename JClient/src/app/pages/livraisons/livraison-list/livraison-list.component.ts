import { Component, OnInit } from '@angular/core';

// App imports
import { Livraison } from './../livraison';
import { LivraisonsService } from '../_services/livraisons.service';

@Component({
  selector: 'app-livraison-list',
  templateUrl: './livraison-list.component.html',
  styleUrls: ['./livraison-list.component.scss']
})
export class LivraisonListComponent implements OnInit {
    // Using Livraison Model class
    livraisons: Livraison[];
    isLoading: Boolean = false;

  constructor(private livraisonService: LivraisonsService) { }

  ngOnInit() {
    // Get livraison detail
    this.getLivraisons();
  }

  getLivraisons(): void {
    this.isLoading = true;
    this.livraisonService.getLivraisons()
      .subscribe(
        response => this.handleResponse(response),
        error => this.handleError(error));
  }

  protected handleResponse(response: Livraison[]) {
    this.isLoading = false,
    this.livraisons = response;
  }
  protected handleError(error: any) {
    this.isLoading = false,
    console.error(error);
  }


}
