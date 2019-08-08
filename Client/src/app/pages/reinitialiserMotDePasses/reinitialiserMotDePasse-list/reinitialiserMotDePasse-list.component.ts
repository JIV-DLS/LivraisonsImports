import { Component, OnInit } from '@angular/core';

// App imports
import { ReinitialiserMotDePasses } from './../reinitialiserMotDePasses';
import { ReinitialiserMotDePassessService } from '../_services/reinitialiserMotDePassess.service';

@Component({
  selector: 'app-reinitialiserMotDePasses-list',
  templateUrl: './reinitialiserMotDePasses-list.component.html',
  styleUrls: ['./reinitialiserMotDePasses-list.component.scss']
})
export class ReinitialiserMotDePassesListComponent implements OnInit {
    // Using ReinitialiserMotDePasses Model class
    reinitialiserMotDePassess: ReinitialiserMotDePasses[];
    isLoading: Boolean = false;

  constructor(private reinitialiserMotDePassesService: ReinitialiserMotDePassessService) { }

  ngOnInit() {
    // Get reinitialiserMotDePasses detail
    this.getReinitialiserMotDePassess();
  }

  getReinitialiserMotDePassess(): void {
    this.isLoading = true;
    this.reinitialiserMotDePassesService.getReinitialiserMotDePassess()
      .subscribe(
        response => this.handleResponse(response),
        error => this.handleError(error));
  }

  protected handleResponse(response: ReinitialiserMotDePasses[]) {
    this.isLoading = false,
    this.reinitialiserMotDePassess = response;
  }
  protected handleError(error: any) {
    this.isLoading = false,
    console.error(error);
  }


}
