import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class SignupUserService {
	constructor (private http: HttpClient) {}

	userSignUp (data: {
		firstname: string;
		lastname: string;
		company: string;
		email: string;
		username: string;
		password: string;
	}) {
		return this.http.post(environment.apiBaseUrl + '/commonUser', {
			username: data.username,
			password: data.password,
			firstname: data.firstname,
			lastname: data.lastname,
			company: data.company,
			email: data.email,
		});
	}
}
