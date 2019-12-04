import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignupUserService } from 'src/app/service/signup-user.service';
import { Router } from '@angular/router';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls:
    [
      './sign-up.component.scss',
    ],
})
export class SignUpComponent implements OnInit {
  showPass = false;
  acceptTermsAndCondition = false;

  userBasicInfo: FormGroup = this.fb.group({
    firstname:
      [
        '',
        Validators.required,
      ],
    lastname:
      [
        '',
        Validators.required,
      ],
    company:
      [
        '',
        Validators.required,
      ],
    email:
      [
        '',
        [
          Validators.required,
          Validators.email,
        ],
      ],
  });

  newAccountInfo: FormGroup = this.fb.group({
    username:
      [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(16),
        ],
      ],
    password:
      [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(16),
        ],
      ],
    passwordReType:
      [
        '',
        Validators.required,
      ],
  });

  constructor(private fb: FormBuilder, private signupUserService: SignupUserService, private router: Router) { }

  ngOnInit() {

  }

  visibiltyOn() {
    this.showPass = true;
  }
  visibilityOff() {
    this.showPass = false;
  }

  passwordNotMatch() {
    const notMatch =
      this.newAccountInfo.controls.password.value !== this.newAccountInfo.controls.passwordReType.value;
    if (notMatch) {
      this.newAccountInfo.get('passwordReType').setErrors({
        notMatch: true,
      });
    } else {
      this.newAccountInfo.get('passwordReType').setErrors(null);
    }
    return notMatch;
  }

  signUp() {
    if (!this.acceptTermsAndCondition) {
      alert('please accept the terms and condition');
      return;
    }
    console.log(`passwordNotMatch`, this.passwordNotMatch());
    if (!this.passwordNotMatch() && this.userBasicInfo.valid && this.newAccountInfo.valid) {
      console.log('this.newAccountInfo', this.newAccountInfo);
      console.log('this.userBasicInfo', this.userBasicInfo);

      const firstname = this.userBasicInfo.get('firstname').value;
      const lastname = this.userBasicInfo.get('lastname').value;
      const email = this.userBasicInfo.get('email').value;
      const company = this.userBasicInfo.get('company').value;
      const username = this.newAccountInfo.get('username').value;
      const password = this.newAccountInfo.get('password').value;
      this.signupUserService.userSignUp({ company, firstname, lastname, email, username, password }).subscribe(
        (data) => {
          console.log('data', data);
          alert('account created');
          this.router.navigate([
            '/login',
          ]);
        },
        (err) => {
          console.log('error');
        },
      );
    }
  }

  enableUserBasicInfoNextButton() {
    return this.userBasicInfo.valid;
  }

  termsChages(event: MatCheckboxChange) {
    this.acceptTermsAndCondition = event.checked;
    // console.log('event', event.checked);
  }
}
