import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ITransactionSummary } from '../types/TransactionSummary';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrasactionApiService {
  constructor(private http: HttpClient) {}

  postTransaction(trasaction: ITransactionSummary) {
    const httpOptions = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(`${environment.apiBaseUrl}/transaction`, trasaction, {
      headers: httpOptions
    });
  }
}
