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
import { MarchandisesService } from '../../marchandises/_services/marchandises.service';

@Component({
  selector: 'app-bdcf',
  templateUrl: './bdcf.component.html',
   styleUrls: ['./bdcf.component.scss']
})
export class BdcfComponent implements OnInit {

  livraison: Livraison;
  isLoading: Boolean = false;
  transits: Transit[];
  etatsLivraisons: EtatsLivraisons[];
  lieuxLivraisons: LieuxLivraison[];
  sucess = false;
  societes: Societe[];
  marchandiseCmd: MarchandiseCmd[];
  marchandises: MarchandiseCmd[];
  marchAdder: Boolean = false;
  public marchs: MarchandiseCmd[];

  constructor(
    private marchandiseService: MarchandisesService,
    private societeservice: SocietesService,
    private etatsLivraisonservice: EtatsLivraisonssService,
    private lieuxLivraisonservice: LieuxLivraisonsService,
    private transitservice: TransitsService,
    private livraisonsService: LivraisonsService,
    private route: ActivatedRoute) {

      console.log(this.marchandiseCmd);
      this.getMarchandise();
      console.log('###' + this.marchandises);
      this.getEtatsLivraison();
      this.getLieuxLivraison();
      this.getTransits();
      this.getSociete();
      this.marchs = [];
    }

    trouverId(tab, id) {
      // tslint:disable-next-line: prefer-for-of
      
      for (let i = 0; i < tab.length; i++) {
        // tslint:disable-next-line: triple-equals
        if (tab[i].id == id) { return {
          state: true,
          pos: i
        }; }
      }
      return {
        state: false,
        pos: -1
      } ;
    }
    comfirmerListeMarchandise() {

    }
    ajouterQuantite(e, id) {
      // tslint:disable-next-line: no-unused-expression
      console.log('--------------------------################################---------------------');
      console.log(this.marchs);
      console.log('--------------------------################################---------------------');

      let trouver;
      trouver = this.trouverId(this.marchs, id);

      if (trouver.state) {
      this.marchs[trouver.pos].quantite = e.target.value;
      } else {
        console.log('______________________________________');
        console.log('|||||||||||||| Désolé cette marchandise n\'a pas été trouvé ||||||||||||||');
        console.log('--------------------------------------');

      }

    }

  ngOnInit() {
    // Get livraison detail
   // this.getLivraisonDetail();
   this.livraison = new Livraison();
   this.livraison.etatLivraison = new EtatsLivraisons();
   this.livraison.lieuLivraison = new LieuxLivraison();
   this.livraison.transit = new Transit();
  }

  addMarchandiseCmd(value: string) {
    // tslint:disable-next-line: prefer-const
    let newMarchandiseCmd ;
    const index = this.marchandiseCmd.indexOf(newMarchandiseCmd);
    if ( index < 0) {
      this.marchandiseCmd.push(newMarchandiseCmd);
    } else {
      this.marchandiseCmd[index].quantite += 1;
    }

  }

  // removeMarchandiseCmd(value: string) {
  //   // tslint:disable-next-line: prefer-const
  //   let newMarchandiseCmd ;
  //   const index = this.marchandiseCmd.indexOf(newMarchandiseCmd);
  //   if ( index < 0) {
  //     return;
  //   } else {
  //     if (this.marchandiseCmd[index].quantite >= 1) {
  //     this.marchandiseCmd[index].quantite -= 1;
  //     }
  //   }

  // }

  ajouter(attr: MarchandiseCmd, nb: number, cl: String) {

    console.log('--------------------------################################---------------------');
    console.log(attr.quantite);
    console.log('--------------------------################################---------------------');
    const list = this.marchs;
      // tslint:disable-next-line: triple-equals
    if (list.length == 0) { list.push(attr); } else {
          let s = 1;
          // tslint:disable-next-line: prefer-for-of
          for (let i = 0; i < list.length; i++) {
              if (list[i].id == attr.id) { s *= 0; }
          }

          if (s == 1) { list.push(attr); } else {
              for (let i = 0; i < list.length; i++) {
                list[i].quantite = '0';
                if (list[i].id == attr.id) { list.splice(i, 1); }
              }
              // console.log("nb:"+nb+"--Cl:"+cl);
              // document.getElementsByClassName(cl)[nb].value = '';

          }
      }

    this.marchs = list;
    console.log(this.marchs);
  }

  getEtatsLivraison(): void {
    this.isLoading = true;
    this.etatsLivraisonservice.getEtatsLivraisonss()
      .subscribe(
        response => this.handleResponseE(response),
        error => this.handleError(error));
  }

  getMarchandise(): void {
    this.isLoading = true;
    this.marchandiseService.getMarchandises()
      .subscribe(
        // response => this.handleResponseM(response),
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

  protected handleResponseM(response: MarchandiseCmd[]) {
    
    this.isLoading = false;
    this.marchandises = response;
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

class MarchandiseCmd extends Marchandise {
  'quantite': string;
}
