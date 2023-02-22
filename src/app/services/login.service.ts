import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiUrl = `https://api-escuela-production.up.railway.app`;

  token = new BehaviorSubject<string>('');
  token$ = this.token.asObservable();
  user = new BehaviorSubject<any>('');
  user$ = this.token.asObservable();

  constructor(
    private http: HttpClient,
    public route: Router,
    private notification: NzNotificationService
  ) {}

  getApiUrl() {
    return this.apiUrl;
  }
  getApiToken() {
    return this.token.getValue();
  }

  deleteStudentById(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
      }),
    };
    return this.http
      .delete<any>(`${this.apiUrl}/api/v1/alumnos/${id}`, httpOptions)
      .pipe(
        catchError((error: any) => {
          return throwError({
            hasError: true,
            message: error,
          });
        })
      );
  }

  verifyTokenLogin() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
      }),
    };
    return this.http
      .get<any>(`${this.apiUrl}/api/v1/alumnos?limit=10&page=1`, httpOptions)
      .pipe(
        catchError((error: any) => {
          return throwError({
            hasError: true,
            message: error,
          });
        })
      );
  }

  verifyToken() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
      }),
    };

    return this.http
      .get<any>(`${this.apiUrl}/api/v1/alumnos?limit=10&page=1`, httpOptions)
      .subscribe(
        (data) => {
          const token = JSON.parse(localStorage.getItem('token'));
          this.token.next(token);
        },
        (failed) => {
          if (
            failed?.error?.error === 'Token no válido' ||
            failed?.error?.error === 'JWT expirado' ||
            failed?.error?.error === 'JWT formato no válido'
          ) {
            this.route.navigate(['/login']);
            this.notification.create('error', 'Login 🚑', 'Token expirado');
          }
        }
      );
  }

  getNewToken(username: string, password: string) {
    const httpOptions = {};
    return this.http
      .post<any>(`${this.apiUrl}/api/v1/auth/login`, {
        username: username,
        password: password,
      })
      .subscribe(
        (data) => {
          this.token.next(data.token);
          localStorage.setItem('token', data.token);
          localStorage.setItem('currentUserProfile', JSON.stringify(data));
          this.route.navigate(['dashboard']);
        },
        (error) => {
          this.token.next('');
          localStorage.setItem('token', '');
        }
      );
  }
}
