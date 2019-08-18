import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

// App imports
import { LieuxLivraison } from './../lieuxLivraison';
import { LieuxLivraisonsService } from '../_services/lieuxLivraisons.service';
@Component({
  selector: 'app-lieuxLivraison-add',
  templateUrl: './lieux-Livraison-add.component.html',
  styleUrls: ['./lieux-Livraison-add.component.scss']
})
export class LieuxLivraisonAddComponent implements OnInit {

  lieuxLivraison: LieuxLivraison;
  isLoading: Boolean = false;
  sucess: boolean;
  currSuccess: number;

  constructor(
    private route: ActivatedRoute,
    private LieuxLivraisonsService: LieuxLivraisonsService,
    private router: Router ) { }
  ngOnInit() {
    // Get lieuxLivraison detail
    //(new TypeLieuxLivraisonsService(new HttpClient(this.t),new HttpErrorHandler()),new Title('')).typelieuxLivraisons;
    
    this.lieuxLivraison=new LieuxLivraison();
    console.log(this.lieuxLivraison);
  }

  onSubmit(lieuxLivraison) {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.LieuxLivraisonsService.addLieuxLivraison(lieuxLivraison.value)
      .subscribe(response => {
        this.isLoading = false;
        this.lieuxLivraison = response['data'];

      });
    if (this.lieuxLivraison) { this.sucess = true; }
  }

}
