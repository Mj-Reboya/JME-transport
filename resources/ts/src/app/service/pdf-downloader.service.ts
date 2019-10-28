import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { flatMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PdfDownloaderService {
  constructor(private http: HttpClient) { }

  downloadPdf(pdfName: string, transactionId: string) {
    console.log(
      '${environment.apiBaseUrl}/generate-pdf/${pdfName}',
      `${environment.apiBaseUrl}/generate-pdf/${pdfName}`
    );
    return this.http
      .get(`${environment.apiBaseUrl}/generate-pdf/${pdfName}`, {
        params: {
          transaction_id: transactionId
        },
        responseType: 'arraybuffer'
      })
      .pipe(
        map(data => {
          console.log(data);
          const pdfAlias = {
            'pdf-2': 'barcode'
          }
          const newPdfName = pdfAlias[pdfName];
          if (newPdfName) {
            pdfName = newPdfName;
          }
          this.dlFile(data, `${pdfName}-${transactionId}`);
          return data;
        })
      );
  }

  // from https://stackoverflow.com/questions/52154874/angular-6-downloading-file-from-rest-api
  dlFile(data: any, filename: string) {
    console.log('downloading pdf', filename);
    const blob = new Blob([data], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    const achnorElement = document.createElement('a');
    achnorElement.href = url;
    achnorElement.download = filename;
    console.log('window.URL.createObjectURL(blob)', url);
    achnorElement.dispatchEvent(
      new MouseEvent('click', { bubbles: true, cancelable: true, view: window })
    );
    setTimeout(() => {
      window.URL.revokeObjectURL(data);
      achnorElement.remove();
    }, 100);
  }
}
