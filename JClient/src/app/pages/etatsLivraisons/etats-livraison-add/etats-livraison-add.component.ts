import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

// App imports
import { EtatsLivraisons } from './../etatsLivraison';
import { EtatsLivraisonssService } from '../_services/etatsLivraisons.service';
@Component({
  selector: 'app-etatsLivraison-add',
  templateUrl: './etats-Livraison-add.component.html',
  styleUrls: ['./etats-Livraison-add.component.scss']
})
export class EtatsLivraisonAddComponent implements OnInit {

  etatsLivraison: EtatsLivraisons;
  isLoading: Boolean = false;
  sucess: boolean;
  currSuccess: number;

  constructor(
    private route: ActivatedRoute,
    private EtatsLivraisonsService: EtatsLivraisonssService,
    private router: Router ) { }
  ngOnInit() {
    // Get etatsLivraison detail
    //(new TypeEtatsLivraisonsService(new HttpClient(this.t),new HttpErrorHandler()),new Title('')).typeetatsLivraisons;
    
    this.etatsLivraison=new EtatsLivraisons();
    console.log(this.etatsLivraison);
  }

  onSubmit(etatsLivraison) {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.EtatsLivraisonsService.addEtatsLivraisons(etatsLivraison.value)
      .subscribe(response => {
        this.isLoading = false;
        this.etatsLivraison = response['data'];

      });
    if (this.etatsLivraison) { this.sucess = true; }
  }

}
