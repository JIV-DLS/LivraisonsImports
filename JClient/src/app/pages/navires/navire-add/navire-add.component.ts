import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

// App imports
import { Navire } from './../navire';
import { NaviresService } from '../_services/navires.service';
@Component({
  selector: 'app-navire-add',
  templateUrl: './navire-add.component.html',
  styleUrls: ['./navire-add.component.scss']
})
export class NavireAddComponent implements OnInit {

  navire: Navire;
  isLoading: Boolean = false;
  sucess: boolean;
  currSuccess: number;

  constructor(
    private route: ActivatedRoute,
    private NaviresService: NaviresService,
    private router: Router ) { }
  ngOnInit() {
    // Get navire detail
    //(new TypeNaviresService(new HttpClient(this.t),new HttpErrorHandler()),new Title('')).typenavires;
    
    this.navire=new Navire();
    console.log(this.navire);
  }

  onSubmit(navire) {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.NaviresService.addNavire(navire.value)
      .subscribe(response => {
        this.isLoading = false;
        this.navire = response['data'];

      });
    if (this.navire) { this.sucess = true; }
  }

}
