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
  one:Boolean = true;
  two:Boolean = false;
  tree:Boolean = false;
  

  changeBoard( boardTitle: string ):void
  {
    switch(boardTitle)
    {
      case "1":
        this.one=true;
        this.two=false;
        this.tree=false;
        break;
      case "2":
        this.one=false;
        this.two=true;
        this.tree=false;
        break;
      case "3":
        this.one=false;
        this.two=false;
        this.tree=true;
        break;
    }
  }

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
