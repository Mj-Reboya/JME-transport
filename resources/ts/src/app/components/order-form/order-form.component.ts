import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonInfoComponent } from '../person-info/person-info.component';
import { DeliveryInfoComponent } from '../delivery-info/delivery-info.component';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  @ViewChild('senderInfo', { static: true })
  senderInfo: PersonInfoComponent;

  @ViewChild('payorInfo', { static: true })
  payorInfo: PersonInfoComponent;

  @ViewChild('recieverInfo', { static: true })
  recieverInfo: PersonInfoComponent;

  @ViewChild('deliveryInfo', { static: true })
  deliveryInfo: DeliveryInfoComponent;

  constructor() {}

  ngOnInit() {}

  fillPayorInfo(sameAsSender: boolean) {
    for (const key in this.payorInfo.personInfoGroup.controls) {
      if (this.payorInfo.personInfoGroup.controls.hasOwnProperty(key)) {
        const payorData = this.payorInfo.personInfoGroup.controls[key];
        if (sameAsSender) {
          const senderData = this.senderInfo.personInfoGroup.controls[key];
          payorData.setValue(senderData.value);
        } else {
          payorData.setValue('');
        }
      }
    }
  }

  reviewAndSubmit() {
    console.log('this.senderInfo', this.senderInfo.personInfoGroup);
    console.log('this.payorInfo', this.payorInfo.personInfoGroup);
    console.log('this.recieverInfo', this.recieverInfo.personInfoGroup);
    console.log('this.deliveryInfo', this.deliveryInfo.deliveryInfoGroup);
  }
}
