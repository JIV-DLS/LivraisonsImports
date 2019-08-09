import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// App import
import { environment } from '../../../../environments/environment';
import { LieuxLivraison } from '../lieuxLivraison';
import { HttpErrorHandler, HandleError } from '../../../shared/_services/http-handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class LieuxLivraisonsService {
  private readonly apiUrl = environment.apiUrl;
  private lieuxLivraisonsUrl = this.apiUrl + '/lieuxLivraisons';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler ) {
      this.handleError = httpErrorHandler.createHandleError('LieuxLivraisonsService');
     }

  /** GET lieuxLivraisons from lieuxLivraisons endpoint */
  getLieuxLivraisons (): Observable<LieuxLivraison[]> {
    return this.http.get<LieuxLivraison[]>(this.lieuxLivraisonsUrl)
      .pipe(
        catchError(this.handleError('getLieuxLivraisons', []))
      );
  }

  /** GET lieuxLivraison detail from lieuxLivraison-detail endpoint */
  getLieuxLivraisonDetail (id: number): Observable<LieuxLivraison[]> {
    return this.http.get<LieuxLivraison[]>(this.lieuxLivraisonsUrl + `/${id}`)
      .pipe(
        catchError(this.handleError('getLieuxLivraisonDetail', []))
      );
  }

  /** POST lieuxLivraison to lieuxLivraisons endpoint */
  addLieuxLivraison (lieuxLivraison: LieuxLivraison): Observable<LieuxLivraison> {
    return this.http.post<LieuxLivraison>(this.lieuxLivraisonsUrl, lieuxLivraison)
      .pipe(
        catchError(this.handleError('addLieuxLivraison', lieuxLivraison))
      );
  }

  /** PUT lieuxLivraison to lieuxLivraisons endpoint */
  updateLieuxLivraison (lieuxLivraison: LieuxLivraison, id: number): Observable<LieuxLivraison> {
    return this.http.put<LieuxLivraison>(this.lieuxLivraisonsUrl + `/${id}`, lieuxLivraison)
      .pipe(
        catchError(this.handleError('updateLieuxLivraison', lieuxLivraison))
      );
  }

  /** DELETE lieuxLivraison lieuxLivraison endpoint */
  deleteLieuxLivraison (id: number): Observable<any> {
    return this.http.delete<LieuxLivraison[]>(this.lieuxLivraisonsUrl + `/${id}`)
      .pipe(
        catchError(this.handleError('deleteLieuxLivraison'))
      );
  }
}
