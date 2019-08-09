import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// App imports
import { TypeMarchandise } from './../typeMarchandise';
import { TypeMarchandisesService } from '../_services/typeMarchandises.service';

@Component({
  selector: 'app-typeMarchandise-detail',
  templateUrl: './typeMarchandise-detail.component.html',
  styleUrls: ['./typeMarchandise-detail.component.scss']
})
export class TypeMarchandiseDetailComponent implements OnInit {

  typeMarchandise: TypeMarchandise;
  isLoading: Boolean = false;

  constructor(
    private typeMarchandisesService: TypeMarchandisesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // Get typeMarchandise detail
    this.getTypeMarchandiseDetail();
  }

  getTypeMarchandiseDetail(): void {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.typeMarchandisesService.getTypeMarchandiseDetail(id)
      .subscribe(typeMarchandise => {
        this.isLoading = false;
        this.typeMarchandise = typeMarchandise['data'];
      });
  }

}
