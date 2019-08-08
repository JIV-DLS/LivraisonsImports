import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// App imports
import { Employe } from './../employe';
import { EmployesService } from '../_services/employes.service';

@Component({
  selector: 'app-employe-detail',
  templateUrl: './employe-detail.component.html',
  styleUrls: ['./employe-detail.component.scss']
})
export class EmployeDetailComponent implements OnInit {

  employe: Employe;
  isLoading: Boolean = false;

  constructor(
    private employesService: EmployesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // Get employe detail
    this.getEmployeDetail();
  }

  getEmployeDetail(): void {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.employesService.getEmployeDetail(id)
      .subscribe(employe => {
        this.isLoading = false;
        this.employe = employe['data'];
      });
  }

}
