import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  getListAllStudents,
  getNewStudent,
  ListAllStudents,
  Student,
} from 'src/app/helpers/Estudents';
import { LoginService } from 'src/app/services/login.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  apiUrl = `https://api-escuela-production.up.railway.app`;
  isLoading = new BehaviorSubject<boolean>(false);
  pageIndex = new BehaviorSubject<number>(1);
  search = new BehaviorSubject<string>('false');
  currentStudent = new BehaviorSubject<Student>(getNewStudent());
  currentListStudents = new BehaviorSubject<ListAllStudents>(
    getListAllStudents()
  );

  pageIndex$ = this.pageIndex.asObservable();
  isLoading$ = this.isLoading.asObservable();
  search$ = this.search.asObservable();
  currentStudent$ = this.currentStudent.asObservable();
  currentListStudents$ = this.currentListStudents.asObservable();

  constructor(private http: HttpClient, private loginService: LoginService) {}

  getListStudentsByName(name = '') {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.loginService.getApiToken(),
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

  updateStudent(body: any, id: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.loginService.getApiToken(),
      }),
    };
    const url = `${this.apiUrl}/api/v1/alumnos/${id}`;

    return this.http.patch(url, body, httpOptions).pipe(
      map((data) => {
        return data;
      })
    );
  }

  loadListStudents(limit: number = 10, pageIndex: number = 1) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.loginService.getApiToken(),
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

  loadCurrentStudent(id: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.loginService.getApiToken(),
      }),
    };
    return this.http
      .get<any>(`${this.apiUrl}/api/v1/alumnos/${id}`, httpOptions)
      .subscribe(
        (data) => {
          this.currentStudent.next(data);
        },
        (error) => {}
      );
  }
}
