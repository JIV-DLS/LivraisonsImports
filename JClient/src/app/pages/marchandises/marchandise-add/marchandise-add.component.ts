import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

// App imports
import { Marchandise } from './../marchandise';
import { MarchandisesService } from '../_services/marchandises.service';
import { TypeMarchandise } from '../../typeMarchandises/typeMarchandise';
import { TypeMarchandisesService } from '../../typeMarchandises/_services/typeMarchandises.service';
@Component({
  selector: 'app-marchandise-add',
  templateUrl: './marchandise-add.component.html',
  styleUrls: ['./marchandise-add.component.scss']
})
export class MarchandiseAddComponent implements OnInit {

  typeMarchandises: TypeMarchandise[];
  marchandise: Marchandise;
  isLoading: Boolean = false;
  sucess: boolean;
  currSuccess: number;

  constructor(
    private typeMarchandisesService: TypeMarchandisesService,
    private marchandisesService: MarchandisesService,
    private route: ActivatedRoute,
    private router: Router ) { }
  ngOnInit() {
    // Get marchandise detail
    //(new TypeMarchandisesService(new HttpClient(this.t),new HttpErrorHandler()),new Title('')).typeMarchandises;
    this.getTypeMarchandises();
    // this.getMarchandiseDetail();
    this.marchandise=new Marchandise();
    this.marchandise.typeMarchandise=new TypeMarchandise();
    console.log(this.marchandise);
  }

  getTypeMarchandises(): void {
    this.isLoading = true;
    this.typeMarchandisesService.getTypeMarchandises()
      .subscribe(
        response => this.handleResponse(response),
        error => this.handleError(error));
  }
  onSubmit(marchandise) {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.marchandisesService.addMarchandise(marchandise.value)
      .subscribe(response => {
        this.isLoading = false;
        this.marchandise = response['data'];

      });
      if(this.marchandise)
     { this.sucess=true;}
  }
  protected handleResponse(response: TypeMarchandise[]) {
    this.isLoading = false,
    this.typeMarchandises = response;
  }
  protected handleError(error: any) {
    this.isLoading = false,
    console.error(error);
  }
  getMarchandiseDetail(): void {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.marchandisesService.getMarchandiseDetail(id)
      .subscribe(marchandise => {
        this.isLoading = false;
        this.marchandise = marchandise['data'];
      });
  }

}
