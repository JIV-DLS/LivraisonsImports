import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// App imports
import { Societe } from './../societe';
import { SocietesService } from '../_services/societes.service';
import { Adresse } from '../../adresses/adresse';
import { AdressesService } from '../../adresses/_services/adresses.service';

@Component({
  selector: 'app-societe-detail',
  templateUrl: './societe-detail.component.html',
  styleUrls: ['./societe-detail.component.scss']
})
export class SocieteDetailComponent implements OnInit {

  adresses: Adresse[];
  societe: Societe;
  isLoading: Boolean = false;
  one:Boolean = true;
  two:Boolean = false;
  tree:Boolean = false;
  four:Boolean = false;

  changeBoard( boardTitle: string ):void
  {
    switch(boardTitle)
    {
      case "1":
        this.one=true;
        this.two=false;
        this.tree=false;
        this.four=false;
        break;
      case "2":
        this.one=false;
        this.two=true;
        this.tree=false;
        this.four=false;
        break;
      case "3":
        this.one=false;
        this.two=false;
        this.tree=true;
        this.four=false;
        break;
      case "4":
        this.one=false;
        this.two=false;
        this.tree=false;
        this.four=true;
        break;
    }
  }
  constructor(
    
    private adressesService: AdressesService,
    private societesService: SocietesService,
    private route: ActivatedRoute) { }
  ngOnInit() {
    // Get societe detail
    //(new AdressesService(new HttpClient(this.t),new HttpErrorHandler()),new Title('')).adresses;
    this.getAdresses();
    this.getSocieteDetail();
  }

  getAdresses(): void {
    this.isLoading = true;
    this.adressesService.getAdresses()
      .subscribe(
        response => this.handleResponse(response),
        error => this.handleError(error));
  }
  onSubmit(societe) {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.societesService.updateSociete(societe.value,id )
      .subscribe(response => {
        this.isLoading = false;
        this.societe = response['data'];
      });
  }
  protected handleResponse(response: Adresse[]) {
    this.isLoading = false,
    this.adresses = response;
  }
  protected handleError(error: any) {
    this.isLoading = false,
    console.error(error);
  }
  getSocieteDetail(): void {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.societesService.getSocieteDetail(id)
      .subscribe(societe => {
        this.isLoading = false;
        this.societe = societe['data'];
      });
  }

}
