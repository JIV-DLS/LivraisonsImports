import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// App import
import { environment } from '../../../../environments/environment';
import { Profil } from '../profil';
import { HttpErrorHandler, HandleError } from '../../../shared/_services/http-handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class ProfilsService {
  private readonly apiUrl = environment.apiUrl;
  private profilsUrl = this.apiUrl + '/profils';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler ) {
      this.handleError = httpErrorHandler.createHandleError('ProfilsService');
     }

  /** GET profils from profils endpoint */
  getProfils (): Observable<Profil[]> {
    return this.http.get<Profil[]>(this.profilsUrl)
      .pipe(
        catchError(this.handleError('getProfils', []))
      );
  }

  /** GET profil detail from profil-detail endpoint */
  getProfilDetail (id: number): Observable<Profil[]> {
    return this.http.get<Profil[]>(this.profilsUrl + `/${id}`)
      .pipe(
        catchError(this.handleError('getProfilDetail', []))
      );
  }

  /** POST profil to profils endpoint */
  addProfil (profil: Profil): Observable<Profil> {
    return this.http.post<Profil>(this.profilsUrl, profil)
      .pipe(
        catchError(this.handleError('addProfil', profil))
      );
  }

  /** PUT profil to profils endpoint */
  updateProfil (profil: Profil, id: number): Observable<Profil> {
    return this.http.put<Profil>(this.profilsUrl + `/${id}`, profil)
      .pipe(
        catchError(this.handleError('updateProfil', profil))
      );
  }

  /** DELETE profil profil endpoint */
  deleteProfil (id: number): Observable<any> {
    return this.http.delete<Profil[]>(this.profilsUrl + `/${id}`)
      .pipe(
        catchError(this.handleError('deleteProfil'))
      );
  }
}
