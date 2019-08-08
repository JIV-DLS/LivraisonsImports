import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// App import
import { environment } from '../../../../environments/environment';
import { Employe } from '../employe';
import { HttpErrorHandler, HandleError } from '../../../shared/_services/http-handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class EmployesService {
  private readonly apiUrl = environment.apiUrl;
  private employesUrl = this.apiUrl + '/employes';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler ) {
      this.handleError = httpErrorHandler.createHandleError('EmployesService');
     }

  /** GET employes from employes endpoint */
  getEmployes (): Observable<Employe[]> {
    return this.http.get<Employe[]>(this.employesUrl)
      .pipe(
        catchError(this.handleError('getEmployes', []))
      );
  }

  /** GET employe detail from employe-detail endpoint */
  getEmployeDetail (id: number): Observable<Employe[]> {
    return this.http.get<Employe[]>(this.employesUrl + `/${id}`)
      .pipe(
        catchError(this.handleError('getEmployeDetail', []))
      );
  }

  /** POST employe to employes endpoint */
  addEmploye (employe: Employe): Observable<Employe> {
    return this.http.post<Employe>(this.employesUrl, employe)
      .pipe(
        catchError(this.handleError('addEmploye', employe))
      );
  }

  /** PUT employe to employes endpoint */
  updateEmploye (employe: Employe, id: number): Observable<Employe> {
    return this.http.put<Employe>(this.employesUrl + `/${id}`, employe)
      .pipe(
        catchError(this.handleError('updateEmploye', employe))
      );
  }

  /** DELETE employe employe endpoint */
  deleteEmploye (id: number): Observable<any> {
    return this.http.delete<Employe[]>(this.employesUrl + `/${id}`)
      .pipe(
        catchError(this.handleError('deleteEmploye'))
      );
  }
}
