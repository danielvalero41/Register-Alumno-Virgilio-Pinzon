import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { AuthService } from '../services/auth.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  constructor(
    public fb: FormBuilder,
    public route: Router,
    public loginService: LoginService,
    private notification: NzNotificationService
  ) {
    this.formLogin = this.fb.group({
      user: [
        '',
        [
          Validators.email,
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'
          ),
        ],
      ],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.formLogin.controls;
  }

  ngOnInit(): void {}

  login() {
    let existsToken = true;
    this.loginService.verifyToken().subscribe((data: any) => {
      if (data?.error === 'Token no válido') {
        existsToken = false;
      }
    });

    if (existsToken) {
      this.notification.create('success', 'Login', 'Ingreso exitoso');

      this.route.navigate(['dashboard']);
    } else {
      this.route.navigate(['/login']);
      const username = this.formLogin.get('user')?.value;
      const password = this.formLogin.get('password')?.value;
      this.loginService.getNewToken(username, password);
    }
  }

  register() {
    this.route.navigate(['login/register']);
  }
}
