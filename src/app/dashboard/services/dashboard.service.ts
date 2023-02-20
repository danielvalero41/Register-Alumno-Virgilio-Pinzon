import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { getListAllStudents, ListAllStudents } from 'src/app/helpers/Estudents';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  apiUrl = `https://api-escuela-production.up.railway.app`;
  token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YxNWYyZDliNzlmYzE3NmJhNjQxZmUiLCJyb2xlIjpbInByb2Zlc29yIl0sImlhdCI6MTY3NjgyMDA3OCwiZXhwIjoxNjc2OTA2NDc4fQ.Ho9dBEG5IqbOejnv8l2CSafWwyddZjq9sF_OrULiDgQ';
  isLoading = new BehaviorSubject<boolean>(false);
  pageIndex = new BehaviorSubject<number>(1);

  currentListStudents = new BehaviorSubject<ListAllStudents>(
    getListAllStudents()
  );
  pageIndex$ = this.pageIndex.asObservable();
  isLoading$ = this.isLoading.asObservable();

  currentListStudents$ = this.currentListStudents.asObservable();

  constructor(private http: HttpClient) {}

  getListStudentsByName(name = '') {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
      }),
    };
    return this.http
      .get<any>(`${this.apiUrl}/api/v1/alumnos?name=${name}`, httpOptions)
      .subscribe(
        (data) => {
          this.currentListStudents.next(data);
          this.isLoading.next(false);
        },
        (error) => {
          this.isLoading.next(false);

          //   this.error.next(error);
        }
      );
  }

  addStudents(body): Observable<any> {
    const url = `${this.apiUrl}/api/v1/alumnos`;

    return this.http
      .post(url, body, {
        headers: new HttpHeaders({
          Accept: '*/*',
        }),
      })
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  loadListStudents(limit: number = 10, pageIndex: number = 1) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
      }),
    };
    return this.http
      .get<any>(
        `${this.apiUrl}/api/v1/alumnos?limit=${limit}&page=${pageIndex}`,
        httpOptions
      )
      .subscribe(
        (data) => {
          this.currentListStudents.next(data);
          this.isLoading.next(false);
        },
        (error) => {}
      );
  }
}
