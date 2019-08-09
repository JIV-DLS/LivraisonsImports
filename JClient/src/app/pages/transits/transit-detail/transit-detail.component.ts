import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// App imports
import { Transit } from '../transit';
import { TransitsService } from '../_services/transits.service';

@Component({
  selector: 'app-builder-detail',
  templateUrl: './builder-detail.component.html',
  styleUrls: ['./builder-detail.component.scss']
})
export class TransitDetailComponent implements OnInit {

  builder: Transit;
  isLoading: Boolean = false;

  constructor(
    private buildersService: TransitsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // Get builder detail
    this.getTransitDetail();
  }

  getTransitDetail(): void {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.buildersService.getTransitDetail(id)
      .subscribe(builder => {
        this.isLoading = false;
        this.builder = builder['data'];
      });
  }

}
