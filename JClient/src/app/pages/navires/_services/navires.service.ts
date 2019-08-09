import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// App import
import { environment } from '../../../../environments/environment';
import { Navire } from '../navire';
import { HttpErrorHandler, HandleError } from '../../../shared/_services/http-handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class NaviresService {
  private readonly apiUrl = environment.apiUrl;
  private naviresUrl = this.apiUrl + '/navires';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler ) {
      this.handleError = httpErrorHandler.createHandleError('NaviresService');
     }

  /** GET navires from navires endpoint */
  getNavires (): Observable<Navire[]> {
    return this.http.get<Navire[]>(this.naviresUrl)
      .pipe(
        catchError(this.handleError('getNavires', []))
      );
  }

  /** GET navire detail from navire-detail endpoint */
  getNavireDetail (id: number): Observable<Navire[]> {
    return this.http.get<Navire[]>(this.naviresUrl + `/${id}`)
      .pipe(
        catchError(this.handleError('getNavireDetail', []))
      );
  }

  /** POST navire to navires endpoint */
  addNavire (navire: Navire): Observable<Navire> {
    return this.http.post<Navire>(this.naviresUrl, navire)
      .pipe(
        catchError(this.handleError('addNavire', navire))
      );
  }

  /** PUT navire to navires endpoint */
  updateNavire (navire: Navire, id: number): Observable<Navire> {
    return this.http.put<Navire>(this.naviresUrl + `/${id}`, navire)
      .pipe(
        catchError(this.handleError('updateNavire', navire))
      );
  }

  /** DELETE navire navire endpoint */
  deleteNavire (id: number): Observable<any> {
    return this.http.delete<Navire[]>(this.naviresUrl + `/${id}`)
      .pipe(
        catchError(this.handleError('deleteNavire'))
      );
  }
}
