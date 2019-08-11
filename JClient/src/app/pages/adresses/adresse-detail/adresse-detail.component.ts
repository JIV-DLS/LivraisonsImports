import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// App imports
import { Adresse } from './../adresse';
import { AdressesService } from '../_services/adresses.service';

@Component({
  selector: 'app-adresse-detail',
  templateUrl: './adresse-detail.component.html',
  styleUrls: ['./adresse-detail.component.scss']
})
export class AdresseDetailComponent implements OnInit {

  adresse: Adresse;
  isLoading: Boolean = false;

  constructor(
    private adressesService: AdressesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // Get adresse detail
    this.getAdresseDetail();
  }

  getAdresseDetail(): void {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.adressesService.getAdresseDetail(id)
      .subscribe(adresse => {
        this.isLoading = false;
        this.adresse = adresse['data'];
      });
  }

}
