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
import { SocietesService } from '../../societes/_services/societes.service';
import { Societe } from '../../societes/societe';
import { Marchandise } from '../../marchandises/marchandise';

@Component({
  selector: 'app-bdc',
  templateUrl: './bdc.component.html',
   styleUrls: ['./bdc.component.scss']
})
export class BdcComponent implements OnInit {

  livraison: Livraison;
  isLoading: Boolean = false;
  transits: Transit[];
  etatsLivraisons: EtatsLivraisons[];
  lieuxLivraisons: LieuxLivraison[];
  sucess = false;
  societes: Societe[];
  marchandiseCmd: MarchandiseCmd[];

  constructor(
    private societeservice: SocietesService,
    private etatsLivraisonservice: EtatsLivraisonssService,
    private lieuxLivraisonservice: LieuxLivraisonsService,
    private transitservice: TransitsService,
    private livraisonsService: LivraisonsService,
    private route: ActivatedRoute) {

      console.log(this.marchandiseCmd);
      //this.addMarchandiseCmd("4");
      console.log(this.marchandiseCmd);

      this.getEtatsLivraison();
      this.getLieuxLivraison();
      this.getTransits();
      this.getSociete();
    }

  ngOnInit() {
    // Get livraison detail
   // this.getLivraisonDetail();
   this.marchandiseCmd[0]= new MarchandiseCmd(0);
   this.livraison = new Livraison();
   this.livraison.etatLivraison = new EtatsLivraisons();
   this.livraison.lieuLivraison = new LieuxLivraison();
   this.livraison.transit = new Transit();
  }

  addMarchandiseCmd(value: string) {
    // tslint:disable-next-line: prefer-const
    let newMarchandiseCmd = new MarchandiseCmd(value);
    let index = this.marchandiseCmd.indexOf(newMarchandiseCmd);
    if ( index < 0) {
      this.marchandiseCmd.push(newMarchandiseCmd);
    } else {
      this.marchandiseCmd[index].quantite += 1;
    }

  }

  removeMarchandiseCmd(value: string) {
    // tslint:disable-next-line: prefer-const
    let newMarchandiseCmd = new MarchandiseCmd(value);
    const index = this.marchandiseCmd.indexOf(newMarchandiseCmd);
    if ( index < 0) {
      return;
    } else {
      if (this.marchandiseCmd[index].quantite >= 1) {
      this.marchandiseCmd[index].quantite-=1;
      }
    }

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

  getSociete(): void {
    this.isLoading = true;
    this.societeservice.getSocietes()
      .subscribe(
        response => this.handleResponseS(response),
        error => this.handleError(error));
  }

  getLieuxLivraison(): void {
    this.isLoading = true;
    this.lieuxLivraisonservice.getLieuxLivraisons()
      .subscribe(
        response => this.handleResponseL(response),
        error => this.handleError(error));
  }

  // onSubmit(livraison) {
  //   this.isLoading = true;
  //   console.log('================');
  //   console.log(livraison);
  //   console.log('================');
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.livraisonsService.addLivraison(livraison.value)
  //     .subscribe(response => {
  //       this.isLoading = false;
  //       this.livraison = response.data;
  //     });
  //   if (this.livraison) { this.sucess = true; }
  // }
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

  protected handleResponseS(response: Societe[]) {
    this.isLoading = false,
    this.societes = response;
  }


  protected handleError(error: any) {
    this.isLoading = false,
    console.error(error);
  }

  // getLivraisonDetail(): void {
  //   this.isLoading = true;
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.livraisonsService.getLivraisonDetail(id)
  //     .subscribe(response => {
  //       this.isLoading = false;
  //       this.livraison = response.data;
  //     });
  // }

}

class MarchandiseCmd {
  'id': number;
  'libelle': string;
  'quantite': number;
  constructor(id) {
    this.id = id;
    this.libelle = '';
    this.quantite = 0;
  }
}