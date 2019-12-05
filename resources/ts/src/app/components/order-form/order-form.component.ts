import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { PersonInfoComponent } from '../person-info/person-info.component';
import { DeliveryInfoComponent } from '../delivery-info/delivery-info.component';
import { ITransactionSummary } from 'src/app/types/TransactionSummary';
import { TrasactionApiService } from 'src/app/service/trasaction-api.service';
import { of, forkJoin } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { PdfDownloaderService } from 'src/app/service/pdf-downloader.service';
import { User, IUser } from 'src/app/models/user.model';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls:
    [
      './order-form.component.scss',
    ],
})
export class OrderFormComponent implements OnInit, AfterViewInit {

  get currentUserInfo(): IUser {
    return User.storedUser;
  }

  constructor(
    private trasactionApiService: TrasactionApiService,
    private pdfDownloaderService: PdfDownloaderService,
    private cdref: ChangeDetectorRef
  ) { }
  @ViewChild('senderInfo', { static: true })
  senderInfo: PersonInfoComponent;

  @ViewChild('payorInfo', { static: true })
  payorInfo: PersonInfoComponent;

  @ViewChild('recieverInfo', { static: true })
  recieverInfo: PersonInfoComponent;

  @ViewChild('deliveryInfo', { static: true })
  deliveryInfo: DeliveryInfoComponent;

  transactionSummary: ITransactionSummary;

  disableReturn = false;
  disableResubmit = false;

  transactionFetching = true;
  termsAndConditionAccepted = false;

  ngAfterViewInit(): void {
    this.fillSenderInfo();
    this.cdref.detectChanges();
  }

  ngOnInit() {
    // this.senderInfo.updateInputUsingCached();
    // this.recieverInfo.updateInputUsingCached();
    // this.payorInfo.updateInputUsingCached();
    // this.fillSenderInfo();
  }

  fillSenderInfo() {
    // console.log('this.senderInfo.personInfoGroup', this.senderInfo.personInfoGroup);
    this.senderInfo.updateInputUsingCached();
    const currentUser = this.currentUserInfo;
    const senderControls = this.senderInfo.personInfoGroup;
    const company = senderControls.get('company');
    const name = senderControls.get('name');
    const email = senderControls.get('email');
    company.setValue(currentUser.company);
    name.setValue(currentUser.firstname + ' ' + currentUser.lastname);
    email.setValue(currentUser.email);
  }

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
    if (event.selectedIndex && event.selectedIndex === 4) {
      if (this.deliveryInfo.deliveryInfoGroup.valid) {
        this.deliveryInfo.itemForm.resetForm();
      }
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
      sender:
      {
        name: sender.get('name').value,
        bookingDate: new Date(sender.get('bookingDate').value),
        company: sender.get('company').value,
        streetAddress: sender.get('streetAddress').value,
        suburd: sender.get('suburd').value,
        state: sender.get('state').value,
        postCode: Number(sender.get('postalCode').value),
        phone: Number(sender.get('phone').value),
      },
      payor:
      {
        name: payor.get('name').value,
        bookingDate: new Date(payor.get('bookingDate').value),
        company: payor.get('company').value,
        streetAddress: payor.get('streetAddress').value,
        suburd: payor.get('suburd').value,
        state: payor.get('state').value,
        postCode: Number(payor.get('postalCode').value),
        phone: Number(payor.get('phone').value),
      },
      receiver:
      {
        name: reciever.get('name').value,
        bookingDate: new Date(reciever.get('bookingDate').value),
        company: reciever.get('company').value,
        streetAddress: reciever.get('streetAddress').value,
        suburd: reciever.get('suburd').value,
        state: reciever.get('state').value,
        postCode: Number(reciever.get('postalCode').value),
        phone: Number(reciever.get('phone').value),
      },
      delivery:
      {
        parcelType: delivery.get('parcelType').value,
        specialInstruction: delivery.get('specialInstruction').value,
        pickUpOption: delivery.get('pickUpOption').value,
        pickUpDate: new Date(delivery.get('pickUpDate').value),
        pickUpReadyAt: delivery.get('pickUpReadyAt').value,
        closingTime: delivery.get('closingTime').value,
        deliveryItems: delivery.get('deliveryItems').value,
      },
    };

    console.log('this.transactionSummary', this.transactionSummary);

    this.disableReturn = true;
    this.transactionFetching = true;
    this.disableResubmit = true;
    const pdfNameList = [
      'proof-of-delivery',
      'pdf-2',
      'pickup-manifest',
    ];
    this.trasactionApiService.postTransaction(this.transactionSummary).subscribe((response: { requestId: number }) => {
      console.log('transaction post response', response);
      this.disableResubmit = true;
      forkJoin(
        pdfNameList.map((pdfName) => this.pdfDownloaderService.downloadPdf(pdfName, response.requestId.toString())),
      ).subscribe(
        (data) => {
          console.log('data', data);
        },
        (error) => {
          this.disableReturn = false;
          this.disableResubmit = false;
        },
        () => {
          this.transactionFetching = false;
        },
      );
    });

    // this.fetchPdf(this.transactionSummary).subscribe(
    //   (response: { requestId: number }) => {
    //     console.log('transaction post response', response);
    //     this.disableResubmit = true;
    //     this.pdfDownloaderService
    //       .downloadPdf('proof-of-delivery', response.requestId.toString())
    //       .subscribe(
    //         data => {
    //           console.log('data', data);
    //         },
    //         error => {
    //           this.disableReturn = false;
    //           this.disableResubmit = false;
    //         },
    //         () => {
    //           this.transactionFetching = false;
    //         }
    //       );
    //   }
    // );
  }

  termsChages(event: MatCheckboxChange) {
    this.termsAndConditionAccepted = event.checked;
  }
}
