import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// App imports
import { Societe } from './../societe';
import { SocietesService } from '../_services/societes.service';

@Component({
  selector: 'app-societe-detail',
  templateUrl: './societe-detail.component.html',
  styleUrls: ['./societe-detail.component.scss']
})
export class SocieteDetailComponent implements OnInit {

  societe: Societe;
  isLoading: Boolean = false;

  constructor(
    private societesService: SocietesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // Get societe detail
    this.getSocieteDetail();
  }

  getSocieteDetail(): void {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.societesService.getSocieteDetail(id)
      .subscribe(societe => {
        this.isLoading = false;
        this.societe = societe['data'];
      });
  }

}
