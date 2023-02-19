import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ListAllStudents } from '../helpers/Estudents';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiUrl = `https://api-escuela-production.up.railway.app`;

  token = new BehaviorSubject<string>('');
  token$ = this.token.asObservable();

  constructor(private http: HttpClient) {}

  getApiUrl() {
    return this.apiUrl;
  }
  getApiToken() {
    return this.token;
  }

  verifyToken() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
      }),
    };
    return this.http
      .get<any>(`${this.apiUrl}/api/v1/usuarios`, httpOptions)
      .pipe(
        catchError((error: any) => {
          return throwError({
            hasError: true,
            message: error.message,
          });
        })
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
          this.token.next(data);
          localStorage.setItem('token', data);
        },
        (error) => {
          this.token.next('');
        }
      );
  }
}
