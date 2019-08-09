import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// App imports
import { Navire } from './../navire';
import { NaviresService } from '../_services/navires.service';

@Component({
  selector: 'app-navire-detail',
  templateUrl: './navire-detail.component.html',
  styleUrls: ['./navire-detail.component.scss']
})
export class NavireDetailComponent implements OnInit {

  navire: Navire;
  isLoading: Boolean = false;

  constructor(
    private naviresService: NaviresService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // Get navire detail
    this.getNavireDetail();
  }

  getNavireDetail(): void {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.naviresService.getNavireDetail(id)
      .subscribe(navire => {
        this.isLoading = false;
        this.navire = navire['data'];
      });
  }

}
