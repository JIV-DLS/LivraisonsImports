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

  constructor(
    private lieuxLivraisonsService: LieuxLivraisonsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // Get lieuxLivraison detail
    this.getLieuxLivraisonDetail();
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
