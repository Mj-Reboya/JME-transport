import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITransactionSummary } from 'src/app/types/TransactionSummary';

@Component({
  selector: 'app-transaction-summary',
  templateUrl: './transaction-summary.component.html',
  styleUrls: ['./transaction-summary.component.scss']
})
export class TransactionSummaryComponent implements OnInit {
  @Input()
  transactionSummary: ITransactionSummary;

  @Input()
  transactionFetching = true;

  @Input()
  disableResubmit = false;

  @Output()
  resubmit = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  reloadApp() {
    window.location.reload();
  }

  emitResubmit() {
    this.resubmit.emit(this);
  }
}
