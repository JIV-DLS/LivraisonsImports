import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// App imports
import { Marchandise } from './../marchandise';
import { MarchandisesService } from '../_services/marchandises.service';

@Component({
  selector: 'app-marchandise-detail',
  templateUrl: './marchandise-detail.component.html',
  styleUrls: ['./marchandise-detail.component.scss']
})
export class MarchandiseDetailComponent implements OnInit {

  marchandise: Marchandise;
  isLoading: Boolean = false;

  constructor(
    private marchandisesService: MarchandisesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // Get marchandise detail
    this.getMarchandiseDetail();
  }

  getMarchandiseDetail(): void {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.marchandisesService.getMarchandiseDetail(id)
      .subscribe(marchandise => {
        this.isLoading = false;
        this.marchandise = marchandise['data'];
      });
  }

}
