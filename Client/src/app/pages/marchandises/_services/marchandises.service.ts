import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// App import
import { environment } from '../../../../environments/environment';
import { Marchandise } from '../marchandise';
import { HttpErrorHandler, HandleError } from '../../../shared/_services/http-handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class MarchandisesService {
  private readonly apiUrl = environment.apiUrl;
  private marchandisesUrl = this.apiUrl + '/marchandises';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler ) {
      this.handleError = httpErrorHandler.createHandleError('MarchandisesService');
     }

  /** GET marchandises from marchandises endpoint */
  getMarchandises (): Observable<Marchandise[]> {
    return this.http.get<Marchandise[]>(this.marchandisesUrl)
      .pipe(
        catchError(this.handleError('getMarchandises', []))
      );
  }

  /** GET marchandise detail from marchandise-detail endpoint */
  getMarchandiseDetail (id: number): Observable<Marchandise[]> {
    return this.http.get<Marchandise[]>(this.marchandisesUrl + `/${id}`)
      .pipe(
        catchError(this.handleError('getMarchandiseDetail', []))
      );
  }

  /** POST marchandise to marchandises endpoint */
  addMarchandise (marchandise: Marchandise): Observable<Marchandise> {
    return this.http.post<Marchandise>(this.marchandisesUrl, marchandise)
      .pipe(
        catchError(this.handleError('addMarchandise', marchandise))
      );
  }

  /** PUT marchandise to marchandises endpoint */
  updateMarchandise (marchandise: Marchandise, id: number): Observable<Marchandise> {
    return this.http.put<Marchandise>(this.marchandisesUrl + `/${id}`, marchandise)
      .pipe(
        catchError(this.handleError('updateMarchandise', marchandise))
      );
  }

  /** DELETE marchandise marchandise endpoint */
  deleteMarchandise (id: number): Observable<any> {
    return this.http.delete<Marchandise[]>(this.marchandisesUrl + `/${id}`)
      .pipe(
        catchError(this.handleError('deleteMarchandise'))
      );
  }
}
