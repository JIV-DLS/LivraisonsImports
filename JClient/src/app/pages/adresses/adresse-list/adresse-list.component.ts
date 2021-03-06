import { Component, OnInit } from '@angular/core';

// App imports
import { Adresse } from './../adresse';
import { AdressesService } from '../_services/adresses.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-adresse-list',
  templateUrl: './adresse-list.component.html',
  styleUrls: ['./adresse-list.component.scss']
})
export class AdresseListComponent implements OnInit {
    // Using Adresse Model class
    adresses: Adresse[];
    isLoading: Boolean = false;

  constructor(private adresseService: AdressesService, private titleTagService: Title) { }

  ngOnInit() {
    // Get adresse detail
    this.getAdresses();
  }

  getAdresses(): void {
    this.isLoading = true;
    this.adresseService.getAdresses()
      .subscribe(
        response => this.handleResponse(response),
        error => this.handleError(error));
  }

  public setTitle( pageTitle: string) {
    this.titleTagService.setTitle( pageTitle );
  }

  protected handleResponse(response: Adresse[]) {
    this.isLoading = false,
    this.adresses = response;
  }
  protected handleError(error: any) {
    this.isLoading = false,
    console.error(error);
  }


}
