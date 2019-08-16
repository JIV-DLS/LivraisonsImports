
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// Application modules
import { HomeModule } from './pages/home/home.module';
import { AdressesModule } from './pages/adresses/adresses.module';
import { EmployesModule } from './pages/employes/employes.module';
import { EtatsLivraisonssModule } from './pages/etatsLivraisons/etatsLivraisons.module';
import { LieuxLivraisonsModule } from './pages/lieuxLivraisons/lieuxLivraisons.module';
import { LivraisonsModule } from './pages/livraisons/livraisons.module';
import { MarchandisesModule } from './pages/marchandises/marchandises.module';
import { NaviresModule } from './pages/navires/navires.module';
import { ProfilsModule } from './pages/profils/profils.module';
import { ReinitialiserMotDePassessModule } from './pages/reinitialiserMotDePasses/reinitialiserMotDePasses.module';
import { SocietesModule } from './pages/societes/societes.module';
import { TransitsModule } from './pages/transits/transits.module';
import { TypeMarchandisesModule } from './pages/typeMarchandises/typeMarchandises.module';
import { BikesModule } from './pages/bikes/bikes.module';
import { BuildersModule } from './pages/builders/builders.module';
import { AuthModule } from './pages/auth/auth.module';
import { NavComponent } from './layout/nav/nav.component';
import { HttpErrorHandler } from './shared/_services/http-handle-error.service';

import { AppHttpInterceptorService } from './shared/_services/app-http-interceptor.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './layout/footer/footer.component';
import { AsideComponent } from './layout/aside/aside.component';
import { EmployeAddComponent } from './employes/employe-add/employe-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    AsideComponent,
    EmployeAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    BikesModule,
    BuildersModule,
    AdressesModule,
    EmployesModule,
    EtatsLivraisonssModule,
    LieuxLivraisonsModule,
    LivraisonsModule,
    MarchandisesModule,
    NaviresModule,
    ProfilsModule,
    ReinitialiserMotDePassessModule,
    SocietesModule,
    TransitsModule,
    TypeMarchandisesModule,
    AuthModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    NgbModule.forRoot()
  ],
  providers: [
    Title,
    HttpErrorHandler,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptorService ,
      multi: true
    }
  ],

  bootstrap: [AppComponent],
})
export class AppModule { }
