import { Component, OnInit } from '@angular/core';

// App imports
import { Marchandise } from './../marchandise';
import { MarchandisesService } from '../_services/marchandises.service';

@Component({
  selector: 'app-marchandise-list',
  templateUrl: './marchandise-list.component.html',
  styleUrls: ['./marchandise-list.component.scss']
})
export class MarchandiseListComponent implements OnInit {
    // Using Marchandise Model class
    marchandises: Marchandise[];
    isLoading: Boolean = false;

  constructor(private marchandiseService: MarchandisesService) { }

  ngOnInit() {
    // Get marchandise detail
    this.getMarchandises();
  }

  getMarchandises(): void {
    this.isLoading = true;
    this.marchandiseService.getMarchandises()
      .subscribe(
        response => this.handleResponse(response),
        error => this.handleError(error));
  }

  protected handleResponse(response: Marchandise[]) {
    this.isLoading = false,
    this.marchandises = response;
  }
  protected handleError(error: any) {
    this.isLoading = false,
    console.error(error);
  }


}
