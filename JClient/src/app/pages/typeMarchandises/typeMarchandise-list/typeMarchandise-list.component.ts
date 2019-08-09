import { Component, OnInit } from '@angular/core';

// App imports
import { TypeMarchandise } from './../typeMarchandise';
import { TypeMarchandisesService } from '../_services/typeMarchandises.service';

@Component({
  selector: 'app-typeMarchandise-list',
  templateUrl: './typeMarchandise-list.component.html',
  styleUrls: ['./typeMarchandise-list.component.scss']
})
export class TypeMarchandiseListComponent implements OnInit {
    // Using TypeMarchandise Model class
    typeMarchandises: TypeMarchandise[];
    isLoading: Boolean = false;

  constructor(private typeMarchandiseService: TypeMarchandisesService) { }

  ngOnInit() {
    // Get typeMarchandise detail
    this.getTypeMarchandises();
  }

  getTypeMarchandises(): void {
    this.isLoading = true;
    this.typeMarchandiseService.getTypeMarchandises()
      .subscribe(
        response => this.handleResponse(response),
        error => this.handleError(error));
  }

  protected handleResponse(response: TypeMarchandise[]) {
    this.isLoading = false,
    this.typeMarchandises = response;
  }
  protected handleError(error: any) {
    this.isLoading = false,
    console.error(error);
  }


}
