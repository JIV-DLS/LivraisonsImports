import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

// App imports
import { Societe } from './../societe';
import { SocietesService } from '../_services/societes.service';
import { Adresse } from '../../adresses/adresse';
import { AdressesService } from '../../adresses/_services/adresses.service';
@Component({
  selector: 'app-societe-add',
  templateUrl: './societe-add.component.html',
  styleUrls: ['./societe-add.component.scss']
})
export class SocieteAddComponent implements OnInit {

  adresses: Adresse[];
  societe: Societe;
  isLoading: Boolean = false;
  sucess: boolean;
  currSuccess: number;

  constructor(
    private adressesService: AdressesService,
    private societesService: SocietesService,
    private route: ActivatedRoute,
    private router: Router ) { }
  ngOnInit() {
    // Get societe detail
    //(new AdressesService(new HttpClient(this.t),new HttpErrorHandler()),new Title('')).adresses;
    this.getAdresses();
    // this.getSocieteDetail();
    this.societe=new Societe();
    this.societe.adresse=new Adresse();
    console.log(this.societe);
  }

  getAdresses(): void {
    this.isLoading = true;
    this.adressesService.getAdressesNotRelated()
      .subscribe(
        response => this.handleResponse(response),
        error => this.handleError(error));
  }
  onSubmit(societe) {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.societesService.addSociete(societe.value)
      .subscribe(response => {
        this.isLoading = false;
        this.societe = response['data'];

      });
      if(this.societe)
     { this.sucess=true;}
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
