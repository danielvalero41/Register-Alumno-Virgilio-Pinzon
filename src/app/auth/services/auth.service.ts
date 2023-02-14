import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = `https://api-escuela-production.up.railway.app/`;
  constructor(private http: HttpClient) {}

  getToken() {
    return localStorage.getItem('token');
  }

  setToken(token) {
    localStorage.setItem('token', token);
  }

  handleRegisterUser(data: any) {
    return this.http
      .post<any>(`${this.apiUrl}api/v1/auth/register`, data)
      .toPromise();
  }
}
