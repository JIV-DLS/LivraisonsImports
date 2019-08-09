import { Component, OnInit } from '@angular/core';

// App imports
import { LieuxLivraison } from './../lieuxLivraison';
import { LieuxLivraisonsService } from '../_services/lieuxLivraisons.service';

@Component({
  selector: 'app-lieuxLivraison-list',
  templateUrl: './lieuxLivraison-list.component.html',
  styleUrls: ['./lieuxLivraison-list.component.scss']
})
export class LieuxLivraisonListComponent implements OnInit {
    // Using LieuxLivraison Model class
    lieuxLivraisons: LieuxLivraison[];
    isLoading: Boolean = false;

  constructor(private lieuxLivraisonService: LieuxLivraisonsService) { }

  ngOnInit() {
    // Get lieuxLivraison detail
    this.getLieuxLivraisons();
  }

  getLieuxLivraisons(): void {
    this.isLoading = true;
    this.lieuxLivraisonService.getLieuxLivraisons()
      .subscribe(
        response => this.handleResponse(response),
        error => this.handleError(error));
  }

  protected handleResponse(response: LieuxLivraison[]) {
    this.isLoading = false,
    this.lieuxLivraisons = response;
  }
  protected handleError(error: any) {
    this.isLoading = false,
    console.error(error);
  }


}
