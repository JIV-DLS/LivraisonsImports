import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// App imports
import { EtatsLivraisons } from './../etatsLivraison';
import { EtatsLivraisonssService } from '../_services/etatsLivraisons.service';

@Component({
  selector: 'app-etatsLivraison-detail',
  templateUrl: './etatsLivraison-detail.component.html',
  styleUrls: ['./etatsLivraison-detail.component.scss']
})
export class EtatsLivraisonDetailComponent implements OnInit {

  etatsLivraison: EtatsLivraisons;
  isLoading: Boolean = false;
  one:Boolean = true;
  two:Boolean = false;
  tree:Boolean = false;

  changeBoard( boardTitle: string ):void
  {
    switch(boardTitle)
    {
      case "1":
        this.one=true;
        this.two=false;
        this.tree=false;
        break;
      case "2":
        this.one=false;
        this.two=true;
        this.tree=false;
        break;
      case "3":
        this.one=false;
        this.two=false;
        this.tree=true;
        break;
    }
  }
  constructor(
    private etatsLivraisonsService: EtatsLivraisonssService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // Get etatsLivraison detail
    this.getEtatsLivraisonDetail();
  }

  onSubmit(etatsLivraison) {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.etatsLivraisonsService.updateEtatsLivraisons(etatsLivraison.value, id )
      .subscribe(response => {
        this.etatsLivraison = response['data'];
        
        this.isLoading = false;
      });
      console.log(etatsLivraison);
  }

  getEtatsLivraisonDetail(): void {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.etatsLivraisonsService.getEtatsLivraisonsDetail(id)
      .subscribe(etatsLivraison => {
        this.isLoading = false;
        this.etatsLivraison = etatsLivraison['data'];
      });
  }

}