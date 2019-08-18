import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// App import
import { environment } from '../../../../environments/environment';
import { Livraison } from '../livraison';
import { HttpErrorHandler, HandleError } from '../../../shared/_services/http-handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class LivraisonsService {
  private readonly apiUrl = environment.apiUrl;
  private livraisonsUrl = this.apiUrl + '/livraisons';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler ) {
      this.handleError = httpErrorHandler.createHandleError('LivraisonsService');
     }

  /** GET livraisons from livraisons endpoint */
  getLivraisons (): Observable<Livraison[]> {
    return this.http.get<Livraison[]>(this.livraisonsUrl)
      .pipe(
        catchError(this.handleError('getLivraisons', []))
      );
  }

  /** GET livraison detail from livraison-detail endpoint */
  getLivraisonDetail (id: number): Observable<Livraison[]> {
    return this.http.get<Livraison[]>(this.livraisonsUrl + `/${id}`)
      .pipe(
        catchError(this.handleError('getLivraisonDetail', []))
      );
  }

  /** POST livraison to livraisons endpoint */
  addLivraison (livraison: Livraison): Observable<Livraison> {
    return this.http.post<Livraison>(this.livraisonsUrl, livraison)
      .pipe(
        catchError(this.handleError('addLivraison', livraison))
      );
  }

  /** PUT livraison to livraisons endpoint */
  updateLivraison (livraison: Livraison, id: number): Observable<Livraison> {
    return this.http.put<Livraison>(this.livraisonsUrl + `/${id}`, livraison)
      .pipe(
        catchError(this.handleError('updateLivraison', livraison))
      );
  }

  /** DELETE livraison livraison endpoint */
  deleteLivraison (id: number): Observable<any> {
    return this.http.delete<Livraison[]>(this.livraisonsUrl + `/${id}`)
      .pipe(
        catchError(this.handleError('deleteLivraison'))
      );
  }
}
