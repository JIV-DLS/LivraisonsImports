import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// App imports
import { Livraison } from './../livraison';
import { LivraisonsService } from '../_services/livraisons.service';
import { Transit } from '../../transits/transit';
import { EtatsLivraisons } from '../../etatsLivraisons/etatsLivraison';
import { LieuxLivraison } from '../../lieuxLivraisons/lieuxLivraison';
import { EtatsLivraisonssService } from '../../etatsLivraisons/_services/etatsLivraisons.service';
import { LieuxLivraisonsService } from '../../lieuxLivraisons/_services/lieuxLivraisons.service';
import { TransitsService } from '../../transits/_services/transits.service';

@Component({
  selector: 'app-livraison-add',
  templateUrl: './livraison-add.component.html',
  styleUrls: ['./livraison-add.component.scss']
})
export class LivraisonAddComponent implements OnInit {

  livraison: Livraison;
  isLoading: Boolean = false;
  transits: Transit[];
  etatsLivraisons: EtatsLivraisons[];
  lieuxLivraisons: LieuxLivraison[];
  sucess: boolean= false;

  constructor(
    private etatsLivraisonservice: EtatsLivraisonssService,
    private lieuxLivraisonservice: LieuxLivraisonsService,
    private transitservice: TransitsService,
    private livraisonsService: LivraisonsService,
    private route: ActivatedRoute) { 

      this.getEtatsLivraison();
      this.getLieuxLivraison();
      this.getTransits();
    }

  ngOnInit() {
    // Get livraison detail
   // this.getLivraisonDetail();
   this.livraison= new Livraison();
   this.livraison.etatLivraison= new EtatsLivraisons();
   this.livraison.lieuLivraison= new LieuxLivraison();
   this.livraison.transit= new Transit();
  }
  getEtatsLivraison(): void {
    this.isLoading = true;
    this.etatsLivraisonservice.getEtatsLivraisonss()
      .subscribe(
        response => this.handleResponseE(response),
        error => this.handleError(error));
  }
  
  getTransits(): void {
    this.isLoading = true;
    this.transitservice.getTransitsNotRelated()
      .subscribe(
        response => this.handleResponseT(response),
        error => this.handleError(error));
  }
  
  getLieuxLivraison(): void {
    this.isLoading = true;
    this.lieuxLivraisonservice.getLieuxLivraisons()
      .subscribe(
        response => this.handleResponseL(response),
        error => this.handleError(error));
  }

  onSubmit(livraison) {
    this.isLoading = true;
    console.log("================");
    console.log(livraison);
    console.log("================");
    const id = +this.route.snapshot.paramMap.get('id');
    this.livraisonsService.addLivraison(livraison.value)
      .subscribe(response => {
        this.isLoading = false;
        this.livraison= response['data'];
      });
      if(this.livraison)
     { this.sucess=true;}
  }
  protected handleResponseT(response: Transit[]) {
    this.isLoading = false,
    this.transits = response;
  }

  protected handleResponseE(response: EtatsLivraisons[]) {
    this.isLoading = false,
    this.etatsLivraisons = response;
  }

  protected handleResponseL(response: LieuxLivraison[]) {
    this.isLoading = false,
    this.lieuxLivraisons = response;
  }

  
  protected handleError(error: any) {
    this.isLoading = false,
    console.error(error);
  }

  getLivraisonDetail(): void {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.livraisonsService.getLivraisonDetail(id)
      .subscribe(livraison => {
        this.isLoading = false;
        this.livraison = livraison['data'];
      });
  }

}
