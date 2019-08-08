import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// App import
import { environment } from '../../../../environments/environment';
import { Transit } from '../transit';
import { HttpErrorHandler, HandleError } from '../../../shared/_services/http-handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class TransitsService {
  private readonly apiUrl = environment.apiUrl;
  private transitsUrl = this.apiUrl + '/transits';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler ) {
      this.handleError = httpErrorHandler.createHandleError('TransitsService');
     }

  /** GET transits from transits endpoint */
  getTransits (): Observable<Transit[]> {
    return this.http.get<Transit[]>(this.transitsUrl)
      .pipe(
        catchError(this.handleError('getTransits', []))
      );
  }

  /** GET transit detail from transit-detail endpoint */
  getTransitDetail (id: number): Observable<Transit[]> {
    return this.http.get<Transit[]>(this.transitsUrl + `/${id}`)
      .pipe(
        catchError(this.handleError('getTransitDetail', []))
      );
  }

  /** POST transit to transits endpoint */
  addTransit (transit: Transit): Observable<Transit> {
    return this.http.post<Transit>(this.transitsUrl, transit)
      .pipe(
        catchError(this.handleError('addTransit', transit))
      );
  }

  /** PUT transit to transits endpoint */
  updateTransit (transit: Transit, id: number): Observable<Transit> {
    return this.http.put<Transit>(this.transitsUrl + `/${id}`, transit)
      .pipe(
        catchError(this.handleError('updateTransit', transit))
      );
  }

  /** DELETE transit transit endpoint */
  deleteTransit (id: number): Observable<any> {
    return this.http.delete<Transit[]>(this.transitsUrl + `/${id}`)
      .pipe(
        catchError(this.handleError('deleteTransit'))
      );
  }
}
