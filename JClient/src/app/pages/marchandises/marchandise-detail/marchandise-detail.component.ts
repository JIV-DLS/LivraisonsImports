import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// App imports
import { Marchandise } from './../marchandise';
import { MarchandisesService } from '../_services/marchandises.service';
import { TypeMarchandisesService } from '../../typeMarchandises/_services/typeMarchandises.service';
import { TypeMarchandise } from '../../typeMarchandises/typeMarchandise';
import { TransitsService } from '../../transits/_services/transits.service';
import { Transit } from '../../transits/transit';

@Component({
  selector: 'app-marchandise-detail',
  templateUrl: './marchandise-detail.component.html',
  styleUrls: ['./marchandise-detail.component.scss']
})
export class MarchandiseDetailComponent implements OnInit {

  marchandise: Marchandise;
  isLoading: Boolean = false;
  one:Boolean = true;
  two:Boolean = false;
  tree:Boolean = false;
  four:Boolean = false;
  typeMarchandises: TypeMarchandise[];

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
    private transitService: TransitsService,
    private transits: Transit[],
    private typeMarchandiseservice: TypeMarchandisesService,
    private marchandisesService: MarchandisesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // Get marchandise detail
    this.getTypeMarchandise();
    this.getMarchandiseDetail();
  }

  onSubmit(marchandise) {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.marchandisesService.updateMarchandise(marchandise.value, id)
      .subscribe(response => {
        this.isLoading = false;
        this.marchandise = response['data'];
      });
  }

  getTypeMarchandise(): void {
    this.isLoading = true;
    this.typeMarchandiseservice.getTypeMarchandises()
      .subscribe(
        response => this.handleResponse(response),
        error => this.handleError(error));
  }
  
  getTransits(): void {
    this.isLoading = true;
    this.transitService.getTransits()
      .subscribe(
        response => this.handleResponseT(response),
        error => this.handleError(error));
  }

  protected handleResponseT(response: Transit[]) {
    this.isLoading = false,
    this.transits = response;
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
