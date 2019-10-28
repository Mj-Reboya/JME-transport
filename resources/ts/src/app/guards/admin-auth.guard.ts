import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../service/login.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.loginService.getToken() || this.loginService.getToken() === '') {
      return false;
    }
    return this.loginService.authKey().pipe(
      map(authenticated => {
        console.log('authenticated', authenticated);
        console.log(
          'authenticated.user.type ',
          !authenticated.user && !authenticated.user.type && authenticated.user.type !== 'admin'
        );
        if (
          authenticated.user === undefined ||
          authenticated.user.type === undefined ||
          authenticated.user.type !== 'admin'
        ) {
          console.log('authenticated.user.type ', authenticated.user.type !== 'admin');
          console.log('authenticated.user.type navigate');
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      })
    );
  }
}
