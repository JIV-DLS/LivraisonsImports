import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// App import
import { environment } from '../../../../environments/environment';
import { Societe } from '../societe';
import { HttpErrorHandler, HandleError } from '../../../shared/_services/http-handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class SocietesService {
  private readonly apiUrl = environment.apiUrl;
  private societesUrl = this.apiUrl + '/societes';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler ) {
      this.handleError = httpErrorHandler.createHandleError('SocietesService');
     }

  /** GET societes from societes endpoint */
  getSocietes (): Observable<Societe[]> {
    return this.http.get<Societe[]>(this.societesUrl)
      .pipe(
        catchError(this.handleError('getSocietes', []))
      );
  }

  /** GET societe detail from societe-detail endpoint */
  getSocieteDetail (id: number): Observable<Societe[]> {
    return this.http.get<Societe[]>(this.societesUrl + `/${id}`)
      .pipe(
        catchError(this.handleError('getSocieteDetail', []))
      );
  }

  /** POST societe to societes endpoint */
  addSociete (societe: Societe): Observable<Societe> {
    return this.http.post<Societe>(this.societesUrl, societe)
      .pipe(
        catchError(this.handleError('addSociete', societe))
      );
  }

  /** PUT societe to societes endpoint */
  updateSociete (societe: Societe, id: number): Observable<Societe> {
    return this.http.put<Societe>(this.societesUrl + `/${id}`, societe)
      .pipe(
        catchError(this.handleError('updateSociete', societe))
      );
  }

  /** DELETE societe societe endpoint */
  deleteSociete (id: number): Observable<any> {
    return this.http.delete<Societe[]>(this.societesUrl + `/${id}`)
      .pipe(
        catchError(this.handleError('deleteSociete'))
      );
  }
}
