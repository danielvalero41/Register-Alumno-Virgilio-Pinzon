import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  _baseURL: string = 'https://api-escuela-production.up.railway.app';

  constructor(private http: HttpClient) {}

  getToken() {
    return localStorage.getItem('token');
  }

  setToken(token) {
    localStorage.setItem('token', token);
  }

  addStudents(body): Observable<any> {
    const url = `${this._baseURL}/api/v1/alumnos`;

    return this.http
      .post(url, body, {
        headers: new HttpHeaders({
          Accept: '*/*',
        }),
      })
      .pipe(map((data) => data));
  }
}
