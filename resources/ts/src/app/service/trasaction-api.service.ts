import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ITransactionSummary } from '../types/TransactionSummary';
import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';

@Injectable({
	providedIn: 'root',
})
export class TrasactionApiService {
	constructor (private http: HttpClient, private loginService: LoginService) {}

	postTransaction (trasaction: ITransactionSummary) {
		return this.http.post(`${environment.apiBaseUrl}/transaction`, trasaction, {
			headers:
				{
					'Content-Type': 'application/json',
					Authorization: this.loginService.getToken(),
				},
		});
	}
}
