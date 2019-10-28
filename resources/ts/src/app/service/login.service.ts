import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { IUser, User } from '../models/user.model';

export const TOKEN_STORAGE_KEY = btoa('TOKEN_STORAGE');

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) { }

  isLogin() {
    return this.authKey().pipe(
      map((data) => true),
      catchError((data) => {
        console.log(data);
        return of(false);
      }),
    );
  }

  loginUser(u: string, p: string) {
    return this.http
      .post(
        environment.apiBaseUrl + '/commonUserSession',
        { username: u, password: p },
        {
          headers: { 'Content-Type': 'application/json' },
        },
      )
      .pipe(
        map((data: { message: string; session_token: string; user: IUser }) => {
          this.saveToken(data.session_token);
          return data;
        }),
      );
  }

  authKey() {
    return this.http
      .get(environment.apiBaseUrl + '/commonUserSession', {
        headers:
        {
          Authorization: this.getToken(),
        },
      })
      .pipe(
        map((data: { message: string; usedToken: string; user: IUser }) => {
          console.log('auth check', data);
          const newUser = new User(data.user);
          newUser.storeToStorage();
          return data;
        }),
      );
  }

  getToken() {
    return localStorage.getItem(TOKEN_STORAGE_KEY) || '';
  }

  private saveToken(token: string) {
    localStorage.setItem(TOKEN_STORAGE_KEY, token);
  }
}
