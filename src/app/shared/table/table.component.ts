import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DashboardService } from 'src/app/dashboard/services/dashboard.service';
import { ListAllStudents } from 'src/app/helpers/Estudents';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() rows;
  @Input() tableHeaders;
  @Output() eventAction = new EventEmitter<any>();
  isCheckbox = false;
  pageIndex = 1;
  pageSize = 2;
  total = 5;
  currentListStudents!: ListAllStudents;

  pageChange(pageIndex: number): void {
    this.pageIndex = pageIndex;
    this.dashboardService.pageIndex.next(pageIndex);
    this.dashboardService.isLoading.next(true);
    this.dashboardService.loadListStudents(10, pageIndex);
  }
  constructor(
    public dashboardService: DashboardService,
    public loginService: LoginService,
    private notification: NzNotificationService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.dashboardService.currentListStudents$.subscribe(
      (data: ListAllStudents) => {
        this.currentListStudents = data;
      }
    );
    this.dashboardService.pageIndex$.subscribe((data: number) => {
      this.pageIndex = data;
    });
  }

  isObject(obj) {
    return typeof obj === 'object';
  }

  selectedRow(e) {
    console.log(e);
  }

  removeStudent(data) {
    this.loginService.deleteStudentById(data.action._id).subscribe(
      (data: any) => {
        this.notification.create(
          'success',
          'Completado ✅',
          'Alumno eliminado'
        );
      },
      (dataError) => {
        this.notification.create(
          'error',
          'No Completado 🏥',
          'Problemas con la eliminacion del Alumno'
        );
      }
    );
  }

  unsorted() {}

  actionEmit(data) {
    this.eventAction.emit(data);
  }

  onStudentClick(data: any) {
    console.log('data ', data.action._id);
    this.router.navigate(['dashboard/details', data.action._id]);
  }
}
