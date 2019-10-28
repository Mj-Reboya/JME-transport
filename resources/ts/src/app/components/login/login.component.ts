import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:
    [
      './login.component.scss',
    ],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private loginService: LoginService,
    private fb: FormBuilder,
  ) { }

  loginAccountForm: FormGroup = this.fb.group({
    username:
      [
        '',
        Validators.required,
      ],
    password:
      [
        '',
        Validators.required,
      ],
  });

  ngOnInit() {
    localStorage.clear();
  }

  login() {
    console.log('loginAccountForm', this.loginAccountForm);
    if (this.loginAccountForm.valid) {
      const username = this.loginAccountForm.get('username').value;
      const password = this.loginAccountForm.get('password').value;
      this.loginService.loginUser(username, password).subscribe(
        (data) => {
          const user = data.user;
          console.log('user', user);
          if (user && user.type && user.type === 'admin') {
            this.router.navigate(
              [
                '/admin',
              ],
              { relativeTo: this.activateRoute },
            );
          } else {
            this.router.navigate(
              [
                '/orderForm',
              ],
              { relativeTo: this.activateRoute },
            );
          }

        },
        (err: HttpErrorResponse) => {
          console.log('err', err.error);
          alert(err.error.message);
          this.loginAccountForm.reset();
        },
      );
    }
  }

  signUp() {
    this.router.navigate(
      [
        '/sign-up',
      ],
      { relativeTo: this.activateRoute },
    );
  }
}
