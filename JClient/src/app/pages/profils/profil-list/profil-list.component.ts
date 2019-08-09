import { Component, OnInit } from '@angular/core';

// App imports
import { Profil } from './../profil';
import { ProfilsService } from '../_services/profils.service';

@Component({
  selector: 'app-profil-list',
  templateUrl: './profil-list.component.html',
  styleUrls: ['./profil-list.component.scss']
})
export class ProfilListComponent implements OnInit {
    // Using Profil Model class
    profils: Profil[];
    isLoading: Boolean = false;

  constructor(private profilService: ProfilsService) { }

  ngOnInit() {
    // Get profil detail
    this.getProfils();
  }

  getProfils(): void {
    this.isLoading = true;
    this.profilService.getProfils()
      .subscribe(
        response => this.handleResponse(response),
        error => this.handleError(error));
  }

  protected handleResponse(response: Profil[]) {
    this.isLoading = false,
    this.profils = response;
  }
  protected handleError(error: any) {
    this.isLoading = false,
    console.error(error);
  }


}
