import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// App imports
import { environment } from '../../../../environments/environment';
import { User } from '../user';
import { HandleError } from 'src/app/shared/_services/http-handle-error.service';
// Setup headers
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser: User;
  private readonly apiUrl = environment.apiUrl;
  private registerUrl = this.apiUrl + '/register';
  private loginUrl = this.apiUrl + '/login';
  private userUrl = this.apiUrl + '/user';
  private handleErrors: HandleError;

  constructor(
    private http: HttpClient,
    private router: Router) {}

  onRegister(user: User): Observable<User> {

    const request = JSON.stringify(
      { name: user.name, email: user.email, password: user.password }
    );

    return this.http.post(this.registerUrl, request, httpOptions)
      .pipe(
        map((response: User) => {
          // Receive jwt token in the response
          const token: string = response['access_token'];
          // If we have a token, proceed
          if (token) {
            this.setToken(token);
            this.getUser().subscribe();
          }
          return response;
        }),
        catchError(error => this.handleError(error))
      );
  }

  onLogin(user: User): Observable<User> {

    const request = JSON.stringify(
      { email: user.email, password: user.password }
    );

    return this.http.post(this.loginUrl, request, httpOptions)
      .pipe(
        map((response: User) => {
          // Receive jwt token in the response
          const token: string = response['access_token'];
          // If we have a token, proceed
          if (token) {
            this.setToken(token);
            this.getUser().subscribe();
          }
          return response;
        }),
        catchError(error => this.handleError(error))
      );
  }

  onLogout(): Observable<User> {
    return this.http.post(this.apiUrl + '/logout', httpOptions).pipe(
      tap(
        () => {
          localStorage.removeItem('token');
          this.router.navigate(['/']);
        }
      )
    );
  }

  setToken(token: string): void {
    return localStorage.setItem('token', token );
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  getUser(): Observable<User> {
    return this.http.get(this.apiUrl + '/me').pipe(
      tap(
        (user: User) => {
          this.currentUser = user;
        }
      )
    );
  }

  isAuthenticated(): boolean {
    // get the token
    const token: string = this.getToken();
    if (token) {
      return true;
    }
    return false;
  }
  /** GET users from users endpoint */
  getusers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl)
      .pipe(
        catchError(this.handleErrors('getusers', []))
      );
  }

  /** GET user detail from user-detail endpoint */
  getuserDetail(id: number): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl + `/${id}`)
      .pipe(
        catchError(this.handleErrors('getuserDetail', []))
      );
  }

  /** POST user to users endpoint */
  adduser (user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user)
      .pipe(
        catchError(this.handleErrors('adduser', user))
      );
  }

  /** PUT user to users endpoint */
  updateuser (id: number, user: User): Observable<User> {
    return this.http.put<User>(this.userUrl + `/${id}`, user)
      .pipe(
        catchError(this.handleErrors('updateuser', user))
      );
  }

  /** DELETE user user endpoint */
  deleteuser (id: number): Observable<any> {
    return this.http.delete<User>(this.userUrl + `/${id}`)
      .pipe(
        catchError(this.handleErrors('deleteuser'))
      );
  }

  /** Vote on user */
  voteOnuser (vote: number, user: number): Observable<any> {
    const rating = vote;
    return this.http.post(this.userUrl + `/${user}/ratings`, {rating})
      .pipe(
        catchError(this.handleErrors('voteOnuser', []))
      );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side error.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend error.
        return throwError(error);
    }
    // return a custom error message
    return throwError('Ohps something wrong happen here; please try again later.');
  }
}
