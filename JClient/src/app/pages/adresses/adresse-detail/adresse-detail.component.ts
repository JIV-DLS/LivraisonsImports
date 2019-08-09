import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// App imports
import { Builder } from './../adresse';
import { BuildersService } from '../_services/adresses.service';

@Component({
  selector: 'app-adresse-detail',
  templateUrl: './adresse-detail.component.html',
  styleUrls: ['./adresse-detail.component.scss']
})
export class BuilderDetailComponent implements OnInit {

  adresse: Builder;
  isLoading: Boolean = false;

  constructor(
    private adressesService: BuildersService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // Get adresse detail
    this.getBuilderDetail();
  }

  getBuilderDetail(): void {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.adressesService.getBuilderDetail(id)
      .subscribe(adresse => {
        this.isLoading = false;
        this.adresse = adresse['data'];
      });
  }

}
