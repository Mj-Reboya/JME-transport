import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  showPass = false;
  newAccountInfo: FormGroup = this.fb.group({
    password: ['', Validators.required],
    passwordReType: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  visibiltyOn() {
    this.showPass = true;
  }
  visibilityOff() {
    this.showPass = false;
  }

  passwordNotMatch() {
    const notMatch =
      this.newAccountInfo.controls.password.value !==
      this.newAccountInfo.controls.passwordReType.value;
    if (notMatch) {
      this.newAccountInfo.get('passwordReType').setErrors({
        notMatch: true
      });
    } else {
      this.newAccountInfo.get('passwordReType').setErrors(null);
    }
    return notMatch;
  }

  signUp() {
    console.log(`passwordNotMatch`, this.passwordNotMatch());
  }
}
