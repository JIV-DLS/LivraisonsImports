import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// App import
import { environment } from '../../../../environments/environment';
import { EtatsLivraisons } from '../etatsLivraison';
import { HttpErrorHandler, HandleError } from '../../../shared/_services/http-handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class EtatsLivraisonssService {
  private readonly apiUrl = environment.apiUrl;
  private etatsLivraisonssUrl = this.apiUrl + '/etatsLivraisons';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler ) {
      this.handleError = httpErrorHandler.createHandleError('EtatsLivraisonssService');
     }

  /** GET etatsLivraisonss from etatsLivraisonss endpoint */
  getEtatsLivraisonss(): Observable<EtatsLivraisons[]> {
    return this.http.get<EtatsLivraisons[]>(this.etatsLivraisonssUrl)
      .pipe(
        catchError(this.handleError('getEtatsLivraisonss', []))
      );
  }

  /** GET etatsLivraisons detail from etatsLivraisons-detail endpoint */
  getEtatsLivraisonsDetail (id: number): Observable<EtatsLivraisons[]> {
    return this.http.get<EtatsLivraisons[]>(this.etatsLivraisonssUrl + `/${id}`)
      .pipe(
        catchError(this.handleError('getEtatsLivraisonsDetail', []))
      );
  }

  /** POST etatsLivraisons to etatsLivraisonss endpoint */
  addEtatsLivraisons (etatsLivraisons: EtatsLivraisons): Observable<EtatsLivraisons> {
    return this.http.post<EtatsLivraisons>(this.etatsLivraisonssUrl, etatsLivraisons)
      .pipe(
        catchError(this.handleError('addEtatsLivraisons', etatsLivraisons))
      );
  }

  /** PUT etatsLivraisons to etatsLivraisonss endpoint */
  updateEtatsLivraisons (etatsLivraisons: EtatsLivraisons, id: number): Observable<EtatsLivraisons> {
    return this.http.put<EtatsLivraisons>(this.etatsLivraisonssUrl + `/${id}`, etatsLivraisons)
      .pipe(
        catchError(this.handleError('updateEtatsLivraisons', etatsLivraisons))
      );
  }

  /** DELETE etatsLivraisons etatsLivraisons endpoint */
  deleteEtatsLivraisons (id: number): Observable<any> {
    return this.http.delete<EtatsLivraisons[]>(this.etatsLivraisonssUrl + `/${id}`)
      .pipe(
        catchError(this.handleError('deleteEtatsLivraisons'))
      );
  }
}
