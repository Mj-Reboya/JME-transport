import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../service/login.service';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class AuthGuard implements CanActivate {
	constructor (private loginService: LoginService, private router: Router) {}

	canActivate (
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot,
	): Observable<boolean> | Promise<boolean> | boolean {
		return this.loginService.isLogin().pipe(
			map((authenticated) => {
				console.log('authenticated', authenticated);
				if (!authenticated) {
					this.router.navigate([
						'/login',
					]);
				}
				return authenticated;
			}),
		);
	}
}
