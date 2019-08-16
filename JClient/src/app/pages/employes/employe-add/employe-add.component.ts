import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// App imports
import { Employe } from './../employe';
import { EmployesService } from '../_services/employes.service';
import { Adresse } from '../../adresses/adresse';
import { AdressesService } from '../../adresses/_services/adresses.service';
@Component({
  selector: 'app-employe-add',
  templateUrl: './employe-add.component.html',
  styleUrls: ['./employe-add.component.scss']
})
export class EmployeAddComponent implements OnInit {

  adresses: Adresse[];
  employe: Employe;
  isLoading: Boolean = false;
  sucess: boolean;
  currSuccess: number;

  constructor(
    private adressesService: AdressesService,
    private employesService: EmployesService,
    private route: ActivatedRoute) { }
  ngOnInit() {
    // Get employe detail
    //(new AdressesService(new HttpClient(this.t),new HttpErrorHandler()),new Title('')).adresses;
    this.getAdresses();
    // this.getEmployeDetail();
    this.employe=new Employe();
    this.employe.adresse=new Adresse();
    console.log(this.employe);
  }

  getAdresses(): void {
    this.isLoading = true;
    this.adressesService.getAdressesNotRelated()
      .subscribe(
        response => this.handleResponse(response),
        error => this.handleError(error));
  }
  onSubmit(employe) {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.employesService.addEmploye(employe.value)
      .subscribe(response => {
        this.isLoading = false;
        this.employe = response['data'];

      });
      if(this.employe.id)
     { this.sucess=true;
      this.currSuccess=this.employe.id;}
  }
  protected handleResponse(response: Adresse[]) {
    this.isLoading = false,
    this.adresses = response;
  }
  protected handleError(error: any) {
    this.isLoading = false,
    console.error(error);
  }
  getEmployeDetail(): void {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.employesService.getEmployeDetail(id)
      .subscribe(employe => {
        this.isLoading = false;
        this.employe = employe['data'];
      });
  }

}
