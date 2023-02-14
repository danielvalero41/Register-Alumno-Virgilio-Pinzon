import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  formLogin: FormGroup;
  constructor(
    public fb: FormBuilder,
    public route: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) {
    this.formLogin = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
      role: ['', Validators.required],
    });
  }
  roles = [
    { value: 'admin', label: 'Administrador' },
    { value: 'teacher', label: 'Maestro' },
    { value: 'student', label: 'Estudiante' },
  ];

  get f() {
    return this.formLogin.controls;
  }

  ngOnInit(): void {}

  login() {
    this.route.navigate(['dashboard']);
  }

  register(event: Event): void {
    event.preventDefault();
    const data = this.formLogin.value;
    const response: any = this.authService.handleRegisterUser(data);
    if (response.ok) {
      this.route.navigate(['dashboard']);
    } else {
      this.route.navigate(['']);
    }
  }
}
