import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// App imports
import { Navire } from './../navire';
import { NaviresService } from '../_services/navires.service';

@Component({
  selector: 'app-navire-detail',
  templateUrl: './navire-detail.component.html',
  styleUrls: ['./navire-detail.component.scss']
})
export class NavireDetailComponent implements OnInit {

  navire: Navire;
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
    private naviresService: NaviresService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // Get navire detail
    this.getNavireDetail();
  }

  onSubmit(navire) {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.naviresService.updateNavire(navire.value, id )
      .subscribe(response => {
        this.navire = response['data'];
        
        this.isLoading = false;
      });
      console.log(navire);
  }

  getNavireDetail(): void {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.naviresService.getNavireDetail(id)
      .subscribe(navire => {
        this.isLoading = false;
        this.navire = navire['data'];
      });
  }

}
