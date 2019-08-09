import { Component, OnInit } from '@angular/core';

// App imports
import { Societe } from './../societe';
import { SocietesService } from '../_services/societes.service';

@Component({
  selector: 'app-societe-list',
  templateUrl: './societe-list.component.html',
  styleUrls: ['./societe-list.component.scss']
})
export class SocieteListComponent implements OnInit {
    // Using Societe Model class
    societes: Societe[];
    isLoading: Boolean = false;

  constructor(private societeService: SocietesService) { }

  ngOnInit() {
    // Get societe detail
    this.getSocietes();
  }

  getSocietes(): void {
    this.isLoading = true;
    this.societeService.getSocietes()
      .subscribe(
        response => this.handleResponse(response),
        error => this.handleError(error));
  }

  protected handleResponse(response: Societe[]) {
    this.isLoading = false,
    this.societes = response;
  }
  protected handleError(error: any) {
    this.isLoading = false,
    console.error(error);
  }


}
