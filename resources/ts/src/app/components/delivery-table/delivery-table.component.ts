import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IDeliveryItem } from 'src/app/types/TransactionSummary';

@Component({
  selector: 'app-delivery-table',
  templateUrl: './delivery-table.component.html',
  styleUrls: ['./delivery-table.component.scss']
})
export class DeliveryTableComponent implements OnInit {
  @Input()
  deliveryItems: IDeliveryItem[] = [];

  @Output()
  itemSelected = new EventEmitter<{ item: IDeliveryItem; index: number }>();

  @Output()
  itemDeleted = new EventEmitter<{ item: IDeliveryItem; index: number }>();

  constructor() {}

  ngOnInit() {}

  itemUpdateClicked(item: IDeliveryItem, index: number) {
    console.log('this.itemSelected.emit(item);', item);
    this.itemSelected.emit({ item, index });
  }

  itemDeleteClicked(item: IDeliveryItem, index: number) {
    this.itemDeleted.emit({ item, index });
  }
}
