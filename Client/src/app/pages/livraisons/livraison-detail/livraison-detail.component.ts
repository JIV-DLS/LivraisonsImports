import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// App imports
import { Livraison } from './../livraison';
import { LivraisonsService } from '../_services/livraisons.service';

@Component({
  selector: 'app-livraison-detail',
  templateUrl: './livraison-detail.component.html',
  styleUrls: ['./livraison-detail.component.scss']
})
export class LivraisonDetailComponent implements OnInit {

  livraison: Livraison;
  isLoading: Boolean = false;

  constructor(
    private livraisonsService: LivraisonsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // Get livraison detail
    this.getLivraisonDetail();
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
