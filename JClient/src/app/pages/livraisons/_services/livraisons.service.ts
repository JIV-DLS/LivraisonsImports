import { Injectable, LOCALE_ID } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// App import
import { environment } from '../../../../environments/environment';
import { Livraison } from '../livraison';
import { HttpErrorHandler, HandleError } from '../../../shared/_services/http-handle-error.service';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LivraisonsService {
  private readonly apiUrl = environment.apiUrl;
  private livraisonsUrl = this.apiUrl + '/livraisons';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    public datepipe: DatePipe,
    httpErrorHandler: HttpErrorHandler ) {
      this.handleError = httpErrorHandler.createHandleError('LivraisonsService');
     }

  /** GET livraisons from livraisons endpoint */
  getLivraisons(): Observable<Livraison[]> {
    return this.http.get<Livraison[]>(this.livraisonsUrl)
      .pipe(
        catchError(this.handleError('getLivraisons', []))
      );
  }
   rechTransit_id(id: Number) {
      let data: any = {
        id
      };

      return this.http.get<Livraison[]>(this.livraisonsUrl + '/transit_id', data)
      .pipe(
        catchError(this.handleError('rechTransit_id'))
      );
  }

  // tslint:disable-next-line: ban-types
  rechLieux_livraison_id(id: Number) {

    return this.http.get<Livraison[]>(this.livraisonsUrl + '/lieux_livraison_id', {
        params: {
          id: id.toString()
        },
        responseType: 'json'
      })
      .pipe(
        catchError(this.handleError('rechLieux_livraison_id'))
      );
  }
  
  rechlieux_livraison_id(dateDebut: Date, dateFin: Date): Observable<Livraison[]> {
    // tslint:disable-next-line: prefer-const
    return this.rechDate('lieux_livraison_id', dateDebut, dateFin);
      }
  
  rechetats_livraison_id(id: Number): Observable<Livraison[]> {
    // tslint:disable-next-line: prefer-const
    return this.http.get<Livraison[]>(this.livraisonsUrl + '/' + 'etats_livraison_id' , {
      params: {
        dateDebut: id.toString()
      },
      responseType: 'json'
    })
          .pipe(
            catchError(this.handleError('rechetats_livraison_id', []))
          );
      }

  rechdateConfirmationFournisseur(dateDebut: Date, dateFin: Date): Observable<Livraison[]> {
    // tslint:disable-next-line: prefer-const
    return this.rechDate('dateConfirmationFournisseur', dateDebut, dateFin);
      }
  rechdateDebSures(dateDebut: Date, dateFin: Date): Observable<Livraison[]> {
    // tslint:disable-next-line: prefer-const
    return this.rechDate('dateDebSures', dateDebut, dateFin);
      }

  rechdateLivrEffectiveBB(dateDebut: Date, dateFin: Date): Observable<Livraison[]> {
    // tslint:disable-next-line: prefer-const
    return this.rechDate('dateLivrEffectiveBB', dateDebut, dateFin);
      }

  rechdateLivrDemandeeParBB(dateDebut: Date, dateFin: Date): Observable<Livraison[]> {
        // tslint:disable-next-line: prefer-const
        return this.rechDate('dateLivrDemandeeParBB', dateDebut, dateFin);
          }

      rechDate(typeDate: string, dateDebut: Date, dateFin: Date) {
        // tslint:disable-next-line: prefer-const
    return this.http.get<Livraison[]>(this.livraisonsUrl + '/' + typeDate, {
      params: {
        dateDebut: this.datepipe.transform(dateDebut, 'yyyy-MM-dd'),
        dateFin: this.datepipe.transform(dateFin, 'yyyy-MM-dd'),
      },
      responseType: 'json'
    })
          .pipe(
            catchError(this.handleError('rech' + typeDate, []))
          );
      }
  /** GET livraison detail from livraison-detail endpoint */
  getLivraisonDetail(id: number): Observable<Livraison[]> {
    return this.http.get<Livraison[]>(this.livraisonsUrl + `/${id}`)
      .pipe(
        catchError(this.handleError('getLivraisonDetail', []))
      );
  }

  /** POST livraison to livraisons endpoint */
  addLivraison(livraison: Livraison): Observable<Livraison> {
    return this.http.post<Livraison>(this.livraisonsUrl, livraison)
      .pipe(
        catchError(this.handleError('addLivraison', livraison))
      );
  }

  /** PUT livraison to livraisons endpoint */
  updateLivraison(livraison: Livraison, id: number): Observable<Livraison> {
    return this.http.put<Livraison>(this.livraisonsUrl + `/${id}`, livraison)
      .pipe(
        catchError(this.handleError('updateLivraison', livraison))
      );
  }

  /** DELETE livraison livraison endpoint */
  deleteLivraison(id: number): Observable<any> {
    return this.http.delete<Livraison[]>(this.livraisonsUrl + `/${id}`)
      .pipe(
        catchError(this.handleError('deleteLivraison'))
      );
  }
}
