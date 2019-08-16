import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// App import
import { environment } from '../../../../environments/environment';
import { Adresse } from '../adresse';
import { HttpErrorHandler, HandleError } from '../../../shared/_services/http-handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class AdressesService {
  private readonly apiUrl = environment.apiUrl;
  private adressesUrl = this.apiUrl + '/adresses';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler ) {
      this.handleError = httpErrorHandler.createHandleError('AdressesService');
     }

  /** GET adresses from adresses endpoint */
  getAdresses (): Observable<Adresse[]> {
    return this.http.get<Adresse[]>(this.adressesUrl)
      .pipe(
        catchError(this.handleError('getAdresses', []))
      );
  }
  getAdressesNotRelated (): Observable<Adresse[]> {
    return this.http.get<Adresse[]>(this.apiUrl + '/adressesNotRelated')
      .pipe(
        catchError(this.handleError('getAdresses', []))
      );
  }

  /** GET adresse detail from adresse-detail endpoint */
  getAdresseDetail (id: number): Observable<Adresse[]> {
    return this.http.get<Adresse[]>(this.adressesUrl + `/${id}`)
      .pipe(
        catchError(this.handleError('getAdresseDetail', []))
      );
  }

  /** POST adresse to adresses endpoint */
  addAdresse (adresse: Adresse): Observable<Adresse> {
    return this.http.post<Adresse>(this.adressesUrl, adresse)
      .pipe(
        catchError(this.handleError('addAdresse', adresse))
      );
  }

  /** PUT adresse to adresses endpoint */
  updateAdresse (adresse: Adresse, id: number): Observable<Adresse> {
    return this.http.put<Adresse>(this.adressesUrl + `/${id}`, adresse)
      .pipe(
        catchError(this.handleError('updateAdresse', adresse))
      );
  }

  /** DELETE adresse adresse endpoint */
  deleteAdresse (id: number): Observable<any> {
    return this.http.delete<Adresse[]>(this.adressesUrl + `/${id}`)
      .pipe(
        catchError(this.handleError('deleteAdresse'))
      );
  }
}
