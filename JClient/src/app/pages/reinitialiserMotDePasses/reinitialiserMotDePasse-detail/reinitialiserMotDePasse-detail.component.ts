import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// App imports
import { ReinitialiserMotDePasses } from './../reinitialiserMotDePasse';
import { ReinitialiserMotDePassessService } from '../_services/reinitialiserMotDePasses.service';

@Component({
  selector: 'app-reinitialiserMotDePasses-detail',
  templateUrl: './reinitialiserMotDePasse-detail.component.html',
  styleUrls: ['./reinitialiserMotDePasse-detail.component.scss']
})
export class ReinitialiserMotDePassesDetailComponent implements OnInit {

  reinitialiserMotDePasses: ReinitialiserMotDePasses;
  isLoading: Boolean = false;

  constructor(
    private reinitialiserMotDePassessService: ReinitialiserMotDePassessService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // Get reinitialiserMotDePasses detail
    this.getReinitialiserMotDePassesDetail();
  }

  getReinitialiserMotDePassesDetail(): void {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.reinitialiserMotDePassessService.getReinitialiserMotDePassesDetail(id)
      .subscribe(reinitialiserMotDePasses => {
        this.isLoading = false;
        this.reinitialiserMotDePasses = reinitialiserMotDePasses['data'];
      });
  }

}
