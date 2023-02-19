import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'register-alumno-virgilio-pinzon';

  constructor(public loginService: LoginService, public route: Router) {}

  ngOnInit(): void {
    this.loginService.verifyToken().subscribe((data: any) => {
      if (data?.error === 'Token no válido') {
        this.route.navigate(['/login']);
      }
    });
  }
}
