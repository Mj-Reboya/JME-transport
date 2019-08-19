import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonInfoComponent } from '../person-info/person-info.component';
import { DeliveryInfoComponent } from '../delivery-info/delivery-info.component';
import { ITransactionSummary } from 'src/app/types/TransactionSummary';

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

  transactionSummary: ITransactionSummary;

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

  stepperChange(event) {
    console.log('stepperChange', event);
    if (event.selectedIndex) {
      this.reviewAndSubmit();
    }
  }

  reviewAndSubmit() {
    const sender = this.senderInfo.personInfoGroup;
    const payor = this.payorInfo.personInfoGroup;
    const reciever = this.recieverInfo.personInfoGroup;
    const delivery = this.deliveryInfo.deliveryInfoGroup;

    console.log('this.senderInfo', this.senderInfo.personInfoGroup);
    console.log('this.payorInfo', this.payorInfo.personInfoGroup);
    console.log('this.recieverInfo', this.recieverInfo.personInfoGroup);
    console.log('this.deliveryInfo', this.deliveryInfo.deliveryInfoGroup);

    this.transactionSummary = {
      sender: {
        name: sender.get('name').value,
        bookingDate: new Date(sender.get('bookingDate').value),
        company: sender.get('name').value,
        streetAddress: sender.get('name').value,
        suburd: sender.get('name').value,
        state: sender.get('name').value,
        postalCode: Number(sender.get('name').value),
        phone: Number(sender.get('name').value)
      },
      payor: {
        name: payor.get('name').value,
        bookingDate: new Date(payor.get('bookingDate').value),
        company: payor.get('name').value,
        streetAddress: payor.get('name').value,
        suburd: payor.get('name').value,
        state: payor.get('name').value,
        postalCode: Number(payor.get('name').value),
        phone: Number(payor.get('name').value)
      },
      reciever: {
        name: reciever.get('name').value,
        bookingDate: new Date(reciever.get('bookingDate').value),
        company: reciever.get('name').value,
        streetAddress: reciever.get('name').value,
        suburd: reciever.get('name').value,
        state: reciever.get('name').value,
        postalCode: Number(reciever.get('name').value),
        phone: Number(reciever.get('name').value)
      },
      delivery: {
        parcelType: delivery.get('parcelType').value,
        specialInstruction: delivery.get('specialInstruction').value,
        pickUpOption: delivery.get('pickUpOption').value,
        pickUpDate: new Date(delivery.get('pickUpDate').value),
        pickUpReadyAt: delivery.get('pickUpReadyAt').value,
        closingTime: delivery.get('closingTime').value,
        deliveryItems: delivery.get('deliveryItems').value
      }
    };
  }
}
