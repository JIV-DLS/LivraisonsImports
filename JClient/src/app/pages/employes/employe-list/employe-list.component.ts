import { Component, OnInit } from '@angular/core';

// App imports
import { Employe } from './../employe';
import { EmployesService } from '../_services/employes.service';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.scss']
})
export class EmployeListComponent implements OnInit {
    // Using Employe Model class
    employes: Employe[];
    isLoading: Boolean = false;
  constructor(private employeService: EmployesService) { }

  ngOnInit() {
    // Get employe detail
    this.getEmployes();
  }

  getEmployes(): void {
    this.isLoading = true;
    this.employeService.getEmployes()
      .subscribe(
        response => this.handleResponse(response),
        error => this.handleError(error));
  }
  
  protected handleResponse(response: Employe[]) {
    this.isLoading = false,
    this.employes = response;
  }
  protected handleError(error: any) {
    this.isLoading = false,
    console.error(error);
  }


}
