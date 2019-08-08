import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// App imports
import { Profil } from './../profil';
import { ProfilsService } from '../_services/profils.service';

@Component({
  selector: 'app-profil-detail',
  templateUrl: './profil-detail.component.html',
  styleUrls: ['./profil-detail.component.scss']
})
export class ProfilDetailComponent implements OnInit {

  profil: Profil;
  isLoading: Boolean = false;

  constructor(
    private profilsService: ProfilsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // Get profil detail
    this.getProfilDetail();
  }

  getProfilDetail(): void {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.profilsService.getProfilDetail(id)
      .subscribe(profil => {
        this.isLoading = false;
        this.profil = profil['data'];
      });
  }

}
