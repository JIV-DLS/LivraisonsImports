import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// App imports
import { Employe } from './../employe';
import { EmployesService } from '../_services/employes.service';
import { Adresse } from '../../adresses/adresse';
import { AdressesService } from '../../adresses/_services/adresses.service';

@Component({
  selector: 'app-employe-detail',
  templateUrl: './employe-detail.component.html',
  styleUrls: ['./employe-detail.component.scss']
})
export class EmployeDetailComponent implements OnInit {

  adresses: Adresse[];
  employe: Employe;
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
    private employesService: EmployesService,
    private route: ActivatedRoute) { }
  ngOnInit() {
    // Get employe detail
    //(new AdressesService(new HttpClient(this.t),new HttpErrorHandler()),new Title('')).adresses;
    this.getAdresses();
    this.getEmployeDetail();
  }

  getAdresses(): void {
    this.isLoading = true;
    this.adressesService.getAdresses()
      .subscribe(
        response => this.handleResponse(response),
        error => this.handleError(error));
  }
  onSubmit(employe) {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.employesService.updateEmploye(employe.value,id )
      .subscribe(response => {
        this.isLoading = false;
        this.employe = response['data'];
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
