import { Component, OnInit } from '@angular/core';

// App imports
import { Builder } from './../adresse';
import { BuildersService } from '../_services/adresses.service';

@Component({
  selector: 'app-adresse-list',
  templateUrl: './adresse-list.component.html',
  styleUrls: ['./adresse-list.component.scss']
})
export class BuilderListComponent implements OnInit {
    // Using Builder Model class
    adresses: Builder[];
    isLoading: Boolean = false;

  constructor(private adresseService: BuildersService) { }

  ngOnInit() {
    // Get adresse detail
    this.getBuilders();
  }

  getBuilders(): void {
    this.isLoading = true;
    this.adresseService.getBuilders()
      .subscribe(
        response => this.handleResponse(response),
        error => this.handleError(error));
  }

  protected handleResponse(response: Builder[]) {
    this.isLoading = false,
    this.adresses = response;
  }
  protected handleError(error: any) {
    this.isLoading = false,
    console.error(error);
  }


}
