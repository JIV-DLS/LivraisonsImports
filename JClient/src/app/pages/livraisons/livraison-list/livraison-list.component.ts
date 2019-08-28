import { Component, OnInit } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module';

// App imports
import { Livraison } from './../livraison';
import { LivraisonsService } from '../_services/livraisons.service';

@Component({
  selector: 'app-livraison-list',
  templateUrl: './livraison-list.component.html',
  styleUrls: ['./livraison-list.component.scss']
})
export class LivraisonListComponent implements OnInit {
    // Using Livraison Model class
    livraisons: Livraison[];
    isLoading: Boolean = false;
    sdrop: Boolean = false;
    sfilter: string = "tout";

    etat: boolean=false;
    datlivBB: boolean= false;
    datlivPrevu: boolean= false;
    public searchTextA: Date;
    public searchTextB: Date;
    public searchEtat: string;

    search(lib: string)
    {
      switch(lib)
      {
        case "etat": 
        this.sfilter="suivant état";
        this.etat  = true;
        this.datlivBB= false;
        this.datlivPrevu = false;
        break;
        case "datlivBB": 

        this.sfilter="suivant date de livraison effective à la BB";
        this.etat = false;
        this.datlivBB = true;
        this.datlivPrevu = false;
        break;

        case "datlivPrevu":
          this.sfilter="suivant date de livraison prevu à la BB";
            this.etat = false;
            this.datlivBB = false;
            this.datlivPrevu = true;  
        break;

        case "tout":
          this.sfilter="tout";
            this.etat = false;
            this.datlivBB = false;
            this.datlivPrevu = false;  
        break;
      }
    }
  constructor(
    private livraisonService: LivraisonsService
    ) { 
      console.log("----------");
      console.log(this.livraisons);
      console.log("----------");
    }

  ngOnInit() {
    // Get livraison detail
    this.getLivraisons();
    console.log(this.livraisons);
  }

  getLivraisons(): void {
    this.isLoading = true;
    this.livraisonService.getLivraisons()
      .subscribe(
        response => this.handleResponse(response),
        error => this.handleError(error));
  }

  searchLivraisonsdatlivBB(dateDebut:Date,dateFin:Date): void {
    this.isLoading = true;
    this.livraisonService.rechdateLivrEffectiveBB(dateDebut, dateFin)
      .subscribe(
        response => this.handleResponse(response),
        error => this.handleError(error));
  }

  searchLivraisonsdatlivPrevu(dateDebut:Date,dateFin:Date): void {
    this.isLoading = true;
    this.livraisonService.rechdateLivrDemandeeParBB(dateDebut, dateFin)
      .subscribe(
        response => this.handleResponse(response),
        error => this.handleError(error));
  }

  searchetats_livraison_id(id: number): void {
    this.isLoading = true;
    this.livraisonService.rechetats_livraison_id(id)
      .subscribe(
        response => this.handleResponse(response),
        error => this.handleError(error));
  }

  protected handleResponse(response: Livraison[]) {
    this.isLoading = false,
    this.livraisons = response;
    console.log(response);
  }
  protected handleError(error: any) {
    this.isLoading = false,
    console.error(error);
  }


}
