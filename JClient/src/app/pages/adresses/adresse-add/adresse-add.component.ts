import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// App imports
import { Adresse } from './../adresse';
import { AdressesService } from '../_services/adresses.service';
@Component({
  selector: 'app-adresse-add',
  templateUrl: './adresse-add.component.html',
  styleUrls: ['./adresse-add.component.scss']
})
export class AdresseAddComponent implements OnInit {

  adresses: Adresse[];
  adresse: Adresse;
  isLoading: Boolean = false;
  sucess: boolean= false;
  currSuccess: number;

  constructor(
    //private adressesService: AdressesService,
    private adressesService: AdressesService,
    private route: ActivatedRoute) { }
  ngOnInit() {
    // Get adresse detail
    //(new AdressesService(new HttpClient(this.t),new HttpErrorHandler()),new Title('')).adresses;
    this.getAdresses();
    // this.getAdresseDetail();
    this.adresse=new Adresse();
    console.log(this.adresse);
  }

  getAdresses(): void {
    this.isLoading = true;
    this.adressesService.getAdressesNotRelated()
      .subscribe(
        response => this.handleResponse(response),
        error => this.handleError(error));
  }
  onSubmit(adresse) {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.adressesService.addAdresse(adresse.value)
      .subscribe(response => {
        this.isLoading = false;
        this.adresse = response['data'];

      });
      if(this.adresse)
     { 
       this.sucess=true;}
  }
  protected handleResponse(response: Adresse[]) {
    this.isLoading = false,
    this.adresses = response;
  }
  protected handleError(error: any) {
    this.isLoading = false,
    console.error(error);
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
