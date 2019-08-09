import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private activateRoute: ActivatedRoute) {}

  ngOnInit() {}

  login() {
    this.router.navigate(['/orderForm'], { relativeTo: this.activateRoute });
  }

  signUp() {
    this.router.navigate(['/sign-up'], { relativeTo: this.activateRoute });
  }
}
