import { Component, OnInit, NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EtatsLivraisonssModule } from '../etatsLivraisons/etatsLivraisons.module';

@NgModule({
  imports: [
    EtatsLivraisonssModule
  ]
})
@Component({
  selector: 'app-adresses',
  templateUrl: './adresses.component.html',
  styleUrls: ['./adresses.component.scss']
})
export class AdressesComponent implements OnInit {
  private titleTagService: Title;
  constructor() { }

  ngOnInit() {
    this.titleTagService.setTitle('adressesJiv');
  }

  public setTitle( pageTitle: string) {
    this.titleTagService.setTitle( pageTitle );
  }
}
