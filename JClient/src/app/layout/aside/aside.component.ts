import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/pages/auth/_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  // tslint:disable-next-line: ban-types
  employes: Boolean = false;
  // tslint:disable-next-line: ban-types
  adresse: Boolean = false;
  // tslint:disable-next-line: ban-types
  societes: Boolean = false;
  // tslint:disable-next-line: ban-types
  marchandise: Boolean = false;
  // tslint:disable-next-line: ban-types
  navire: Boolean = false;
  // tslint:disable-next-line: ban-types
  transit: Boolean = false;
  // tslint:disable-next-line: ban-types
  livraison: Boolean = false;
  // tslint:disable-next-line: ban-types
  etatsLivraisons: Boolean = false;
  // tslint:disable-next-line: ban-types
  lieuxLivraisons: Boolean = false;
  // tslint:disable-next-line: ban-types
  profil: Boolean = false;

  show(pan: string) {
         // tslint:disable-next-line: ban-types
         this.employes = false;
         // tslint:disable-next-line: ban-types
         this.adresse = false;
         // tslint:disable-next-line: ban-types
         this.societes = false;
         // tslint:disable-next-line: ban-types
         this.marchandise = false;
         // tslint:disable-next-line: ban-types
         this.navire = false;
         // tslint:disable-next-line: ban-types
         this.transit = false;
         // tslint:disable-next-line: ban-types
         this.livraison = false;
         // tslint:disable-next-line: ban-types
         this.etatsLivraisons = false;
         // tslint:disable-next-line: ban-types
         this.lieuxLivraisons = false;
         // tslint:disable-next-line: ban-types
         this.profil = false;
    // console.log(pan);
         switch (pan) {
case 'employe':
// tslint:disable-next-line: ban-types
this.employes = !this.employes;
break;
case 'adresse':
// tslint:disable-next-line: ban-types
this.adresse = !this.adresse;
break;
case 'societes':
// tslint:disable-next-line: ban-types
this.societes = !this.societes;
break;
case 'marchandise':
this.marchandise = !this.marchandise;
break;
case 'navire':
this.navire = !this.navire;
break;
case 'transit':
this.transit = !this.transit;
break;
case 'livraison':
// tslint:disable-next-line: ban-types
this.livraison = !this.livraison;
break;
case 'etatsLivraisons':
this.etatsLivraisons = !this.etatsLivraisons;
break;
case 'lieuxLivraisons':
this.lieuxLivraisons = !this.lieuxLivraisons;
// tslint:disable-next-line: ban-types
this.profil = false;
break;
case 'profil':
this.profil = !this.profil;
break;

case 'default':
break;
}
}

  public constructor(
    private titleTagService: Title,
    public auth: AuthService,
    private router: Router ) {
      auth.getUser();
    }

  public setTitle( pageTitle: string) {
    this.titleTagService.setTitle( pageTitle );
  }

  ngOnInit() {
    if (this.auth.getToken()) {
      this.auth.getUser().subscribe();
    }
  }

  onLogout() {
    this.auth.onLogout().subscribe();
  }

}
