import { Component, OnInit } from '@angular/core';

// App imports
import { Transit } from '../transit';
import { TransitsService } from '../_services/transits.service';

@Component({
  selector: 'app-transit-list',
  templateUrl: './transit-list.component.html',
  styleUrls: ['./transit-list.component.scss']
})
export class TransitListComponent implements OnInit {
    // Using Transit Model class
    transits: Transit[];
    isLoading: Boolean = false;

  constructor(private transitService: TransitsService) { }

  ngOnInit() {
    // Get transit detail
    this.getTransits();
  }

  getTransits(): void {
    this.isLoading = true;
    this.transitService.getTransits()
      .subscribe(
        response => this.handleResponse(response),
        error => this.handleError(error));
  }

  protected handleResponse(response: Transit[]) {
    this.isLoading = false,
    this.transits = response;
  }
  protected handleError(error: any) {
    this.isLoading = false,
    console.error(error);
  }


}
