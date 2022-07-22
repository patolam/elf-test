import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthRepository } from '../../auth.repository';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  authForm = new FormGroup({
    login: new FormControl('test-login'),
    password: new FormControl('test-pass'),
  });

  constructor(
    private authRepository: AuthRepository,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { login, password } = this.authForm.getRawValue();

    this.authRepository.updateUser({
      login: login || '',
      password: password || '',
    });

    this.router.navigate(['dashboard']);
  }
}
