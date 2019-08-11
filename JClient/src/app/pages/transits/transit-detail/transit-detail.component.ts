import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// App imports
import { Transit } from '../transit';
import { TransitsService } from '../_services/transits.service';

@Component({
  selector: 'app-transit-detail',
  templateUrl: './transit-detail.component.html',
  styleUrls: ['./transit-detail.component.scss']
})
export class TransitDetailComponent implements OnInit {

  transit: Transit;
  isLoading: Boolean = false;

  constructor(
    private transitsService: TransitsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // Get transit detail
    this.getTransitDetail();
  }

  getTransitDetail(): void {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.transitsService.getTransitDetail(id)
      .subscribe(transit => {
        this.isLoading = false;
        this.transit = transit['data'];
      });
  }

}
