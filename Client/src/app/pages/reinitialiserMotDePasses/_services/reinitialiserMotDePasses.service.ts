import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// App import
import { environment } from '../../../../environments/environment';
import { ReinitialiserMotDePasses } from '../reinitialiserMotDePasses';
import { HttpErrorHandler, HandleError } from '../../../shared/_services/http-handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class ReinitialiserMotDePassessService {
  private readonly apiUrl = environment.apiUrl;
  private reinitialiserMotDePassessUrl = this.apiUrl + '/reinitialiserMotDePassess';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler ) {
      this.handleError = httpErrorHandler.createHandleError('ReinitialiserMotDePassessService');
     }

  /** GET reinitialiserMotDePassess from reinitialiserMotDePassess endpoint */
  getReinitialiserMotDePassess (): Observable<ReinitialiserMotDePasses[]> {
    return this.http.get<ReinitialiserMotDePasses[]>(this.reinitialiserMotDePassessUrl)
      .pipe(
        catchError(this.handleError('getReinitialiserMotDePassess', []))
      );
  }

  /** GET reinitialiserMotDePasses detail from reinitialiserMotDePasses-detail endpoint */
  getReinitialiserMotDePassesDetail (id: number): Observable<ReinitialiserMotDePasses[]> {
    return this.http.get<ReinitialiserMotDePasses[]>(this.reinitialiserMotDePassessUrl + `/${id}`)
      .pipe(
        catchError(this.handleError('getReinitialiserMotDePassesDetail', []))
      );
  }

  /** POST reinitialiserMotDePasses to reinitialiserMotDePassess endpoint */
  addReinitialiserMotDePasses (reinitialiserMotDePasses: ReinitialiserMotDePasses): Observable<ReinitialiserMotDePasses> {
    return this.http.post<ReinitialiserMotDePasses>(this.reinitialiserMotDePassessUrl, reinitialiserMotDePasses)
      .pipe(
        catchError(this.handleError('addReinitialiserMotDePasses', reinitialiserMotDePasses))
      );
  }

  /** PUT reinitialiserMotDePasses to reinitialiserMotDePassess endpoint */
  updateReinitialiserMotDePasses (reinitialiserMotDePasses: ReinitialiserMotDePasses, id: number): Observable<ReinitialiserMotDePasses> {
    return this.http.put<ReinitialiserMotDePasses>(this.reinitialiserMotDePassessUrl + `/${id}`, reinitialiserMotDePasses)
      .pipe(
        catchError(this.handleError('updateReinitialiserMotDePasses', reinitialiserMotDePasses))
      );
  }

  /** DELETE reinitialiserMotDePasses reinitialiserMotDePasses endpoint */
  deleteReinitialiserMotDePasses (id: number): Observable<any> {
    return this.http.delete<ReinitialiserMotDePasses[]>(this.reinitialiserMotDePassessUrl + `/${id}`)
      .pipe(
        catchError(this.handleError('deleteReinitialiserMotDePasses'))
      );
  }
}
