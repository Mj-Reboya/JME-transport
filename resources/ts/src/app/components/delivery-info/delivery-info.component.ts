import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-info',
  templateUrl: './delivery-info.component.html',
  styleUrls: ['./delivery-info.component.scss']
})
export class DeliveryInfoComponent implements OnInit {
  serviceTypes = ['service 1', 'service 2'];
  itemTypes = ['item 1', 'item 2'];
  pallets = ['pallet 1', 'pallet 2'];

  selectedServiceType = '';
  selectedItemType = '';
  selectedPallet = '';

  constructor() {}

  ngOnInit() {}
}
