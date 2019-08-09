import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// App import
import { environment } from '../../../../environments/environment';
import { Builder } from '../adresse';
import { HttpErrorHandler, HandleError } from '../../../shared/_services/http-handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class BuildersService {
  private readonly apiUrl = environment.apiUrl;
  private adressesUrl = this.apiUrl + '/adresses';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler ) {
      this.handleError = httpErrorHandler.createHandleError('BuildersService');
     }

  /** GET adresses from adresses endpoint */
  getBuilders (): Observable<Builder[]> {
    return this.http.get<Builder[]>(this.adressesUrl)
      .pipe(
        catchError(this.handleError('getBuilders', []))
      );
  }

  /** GET adresse detail from adresse-detail endpoint */
  getBuilderDetail (id: number): Observable<Builder[]> {
    return this.http.get<Builder[]>(this.adressesUrl + `/${id}`)
      .pipe(
        catchError(this.handleError('getBuilderDetail', []))
      );
  }

  /** POST adresse to adresses endpoint */
  addBuilder (adresse: Builder): Observable<Builder> {
    return this.http.post<Builder>(this.adressesUrl, adresse)
      .pipe(
        catchError(this.handleError('addBuilder', adresse))
      );
  }

  /** PUT adresse to adresses endpoint */
  updateBuilder (adresse: Builder, id: number): Observable<Builder> {
    return this.http.put<Builder>(this.adressesUrl + `/${id}`, adresse)
      .pipe(
        catchError(this.handleError('updateBuilder', adresse))
      );
  }

  /** DELETE adresse adresse endpoint */
  deleteBuilder (id: number): Observable<any> {
    return this.http.delete<Builder[]>(this.adressesUrl + `/${id}`)
      .pipe(
        catchError(this.handleError('deleteBuilder'))
      );
  }
}
