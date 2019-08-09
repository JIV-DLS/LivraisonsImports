import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// App import
import { environment } from '../../../../environments/environment';
import { TypeMarchandise } from '../typeMarchandise';
import { HttpErrorHandler, HandleError } from '../../../shared/_services/http-handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class TypeMarchandisesService {
  private readonly apiUrl = environment.apiUrl;
  private typeMarchandisesUrl = this.apiUrl + '/typeMarchandises';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler ) {
      this.handleError = httpErrorHandler.createHandleError('TypeMarchandisesService');
     }

  /** GET typeMarchandises from typeMarchandises endpoint */
  getTypeMarchandises (): Observable<TypeMarchandise[]> {
    return this.http.get<TypeMarchandise[]>(this.typeMarchandisesUrl)
      .pipe(
        catchError(this.handleError('getTypeMarchandises', []))
      );
  }

  /** GET typeMarchandise detail from typeMarchandise-detail endpoint */
  getTypeMarchandiseDetail (id: number): Observable<TypeMarchandise[]> {
    return this.http.get<TypeMarchandise[]>(this.typeMarchandisesUrl + `/${id}`)
      .pipe(
        catchError(this.handleError('getTypeMarchandiseDetail', []))
      );
  }

  /** POST typeMarchandise to typeMarchandises endpoint */
  addTypeMarchandise (typeMarchandise: TypeMarchandise): Observable<TypeMarchandise> {
    return this.http.post<TypeMarchandise>(this.typeMarchandisesUrl, typeMarchandise)
      .pipe(
        catchError(this.handleError('addTypeMarchandise', typeMarchandise))
      );
  }

  /** PUT typeMarchandise to typeMarchandises endpoint */
  updateTypeMarchandise (typeMarchandise: TypeMarchandise, id: number): Observable<TypeMarchandise> {
    return this.http.put<TypeMarchandise>(this.typeMarchandisesUrl + `/${id}`, typeMarchandise)
      .pipe(
        catchError(this.handleError('updateTypeMarchandise', typeMarchandise))
      );
  }

  /** DELETE typeMarchandise typeMarchandise endpoint */
  deleteTypeMarchandise (id: number): Observable<any> {
    return this.http.delete<TypeMarchandise[]>(this.typeMarchandisesUrl + `/${id}`)
      .pipe(
        catchError(this.handleError('deleteTypeMarchandise'))
      );
  }
}
