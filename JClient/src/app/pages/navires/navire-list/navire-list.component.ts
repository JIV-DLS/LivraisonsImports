import { Component, OnInit } from '@angular/core';

// App imports
import { Navire } from './../navire';
import { NaviresService } from '../_services/navires.service';

@Component({
  selector: 'app-navire-list',
  templateUrl: './navire-list.component.html',
  styleUrls: ['./navire-list.component.scss']
})
export class NavireListComponent implements OnInit {
    // Using Navire Model class
    navires: Navire[];
    isLoading: Boolean = false;

  constructor(private navireService: NaviresService) { }

  ngOnInit() {
    // Get navire detail
    this.getNavires();
  }

  getNavires(): void {
    this.isLoading = true;
    this.navireService.getNavires()
      .subscribe(
        response => this.handleResponse(response),
        error => this.handleError(error));
  }

  protected handleResponse(response: Navire[]) {
    this.isLoading = false,
    this.navires = response;
  }
  protected handleError(error: any) {
    this.isLoading = false,
    console.error(error);
  }


}
