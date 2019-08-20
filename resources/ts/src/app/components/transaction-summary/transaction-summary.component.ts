import { Component, OnInit, Input } from '@angular/core';
import { ITransactionSummary } from 'src/app/types/TransactionSummary';

@Component({
  selector: 'app-transaction-summary',
  templateUrl: './transaction-summary.component.html',
  styleUrls: ['./transaction-summary.component.scss']
})
export class TransactionSummaryComponent implements OnInit {
  @Input()
  transactionSummary: ITransactionSummary;

  downloadReady = false;
  constructor() {}

  ngOnInit() {}
}
