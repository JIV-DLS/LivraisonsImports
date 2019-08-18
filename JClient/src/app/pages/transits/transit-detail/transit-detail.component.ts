import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// App imports
import { Transit } from '../transit';
import { TransitsService } from '../_services/transits.service';
import { Livraison } from '../../livraisons/livraison';
import { Navire } from '../../navires/navire';
import { Marchandise } from '../../marchandises/marchandise';
import { NaviresService } from '../../navires/_services/navires.service';
import { MarchandisesService } from '../../marchandises/_services/marchandises.service';
import { LivraisonsService } from '../../livraisons/_services/livraisons.service';
import { Societe } from '../../societes/societe';
import { SocietesService } from '../../societes/_services/societes.service';

@Component({
  selector: 'app-transit-detail',
  templateUrl: './transit-detail.component.html',
  styleUrls: ['./transit-detail.component.scss']
})
export class TransitDetailComponent implements OnInit {

  transit: Transit;
  isLoading: Boolean = false;
  one:Boolean = true;
  two:Boolean = false;
  tree:Boolean = false;
  four:Boolean = false;
  five:Boolean = false;
  livraison: Livraison[];
  navires: Navire[];
  marchandises: Marchandise[];
  societes: Societe[];

  changeBoard( boardTitle: string ):void
  {
    switch(boardTitle)
    {
      case "1":
        this.one=true;
        this.two=false;
        this.tree=false;
        this.four=false;
        this.five=false;
        break;
      case "2":
        this.one=false;
        this.two=true;
        this.tree=false;
        this.four=false;
        this.five=false;
        break;
      case "3":
        this.one=false;
        this.two=false;
        this.tree=true;
        this.four=false;
        this.five=false;
        break;
      case "4":
        this.one=false;
        this.two=false;
        this.tree=false;
        this.four=true;
        this.five=false;
        break;
      case "5":
        this.one=false;
        this.two=false;
        this.tree=false;
        this.four=false;
        this.five=true;
        break;
    }
  }
  constructor(
    private societeservice: SocietesService,
    private navireservice: NaviresService,
    private marchanidseservice: MarchandisesService,
    private livraisonservice: LivraisonsService,
    private transitsService: TransitsService,
    private route: ActivatedRoute) { 
      this.getNavire();
      this.getMarchandise();
      this.getSociete();
    }

  ngOnInit() {
    // Get transit detail
    this.getTransitDetail();
  }

  getNavire(): void {
    this.isLoading = true;
    this.navireservice.getNavires()
      .subscribe(
        response => this.handleResponseE(response),
        error => this.handleError(error));
  }
  
  
  getMarchandise(): void {
    this.isLoading = true;
    this.marchanidseservice.getMarchandises()
      .subscribe(
        response => this.handleResponseL(response),
        error => this.handleError(error));
  }
  
  getSociete(): void {
    this.isLoading = true;
    this.societeservice.getSocietes()
      .subscribe(
        response => this.handleResponseS(response),
        error => this.handleError(error));
  }

  onSubmit(transit) {
    this.isLoading = true;
    console.log("================");
    console.log(transit);
    console.log("================");
    const id = +this.route.snapshot.paramMap.get('id');
    this.transitsService.updateTransit(transit.value, id)
      .subscribe(response => {
        this.isLoading = false;
        this.transit= response['data'];
      });
  }

  protected handleResponseE(response: Navire[]) {
    this.isLoading = false,
    this.navires = response;
  }

  protected handleResponseL(response: Marchandise[]) {
    this.isLoading = false,
    this.marchandises = response;
  }

  protected handleResponseS(response: Societe[]) {
    this.isLoading = false,
    this.societes = response;
  }

  
  protected handleError(error: any) {
    this.isLoading = false,
    console.error(error);
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
