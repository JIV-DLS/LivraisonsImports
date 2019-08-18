import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// App imports
import { LieuxLivraison } from './../lieuxLivraison';
import { LieuxLivraisonsService } from '../_services/lieuxLivraisons.service';

@Component({
  selector: 'app-lieuxLivraison-detail',
  templateUrl: './lieuxLivraison-detail.component.html',
  styleUrls: ['./lieuxLivraison-detail.component.scss']
})
export class LieuxLivraisonDetailComponent implements OnInit {

  lieuxLivraison: LieuxLivraison;
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
    private lieuxLivraisonsService: LieuxLivraisonsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // Get lieuxLivraison detail
    this.getLieuxLivraisonDetail();
  }

  onSubmit(lieuxLivraison) {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.lieuxLivraisonsService.updateLieuxLivraison(lieuxLivraison.value, id )
      .subscribe(response => {
        this.lieuxLivraison = response['data'];
        
        this.isLoading = false;
      });
      console.log(lieuxLivraison);
  }

  getLieuxLivraisonDetail(): void {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.lieuxLivraisonsService.getLieuxLivraisonDetail(id)
      .subscribe(lieuxLivraison => {
        this.isLoading = false;
        this.lieuxLivraison = lieuxLivraison['data'];
      });
  }

}