import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl, FormControl, FormGroupDirective } from '@angular/forms';
import { RouterLink, Route, Router } from '@angular/router';
import { MatInput } from '@angular/material/input';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
import { IDeliveryItem } from 'src/app/types/TransactionSummary';
import { numOnly } from 'src/app/util/input';

function realNumberValidator(control: FormControl) {
  if (control.value && control.value.length > 0) {

    // match the control value against the regular expression
    const matches = control.value.match('-');

    // if there are matches return an object, else return null.
    return matches && matches.length ? { real_number_error: matches } : null;
  } else {
    return null;
  }
}

@Component({
  selector: 'app-delivery-info',
  templateUrl: './delivery-info.component.html',
  styleUrls:
    [
      './delivery-info.component.scss',
    ],
})
export class DeliveryInfoComponent implements OnInit {

  numOnly = numOnly;

  itemFormShow = true;

  get isDangerousSelected() {
    return this.deliveryInfoGroup && this.deliveryInfoGroup.get('parcelType').value === 'Dangerous Goods';
  }



  constructor(private fb: FormBuilder) { }
  selectedServiceType = '';
  selectedItemType = '';
  selectedPallet = '';

  parcelType = [
    'Dangerous Goods',
    'Hand Unload',
    'Tail Lift',
  ];
  pickupOptionType = [
    'By',
    'On',
  ];

  commodities = [
    'Pallet',
    'Carton',
  ];
  deliveryItems: IDeliveryItem[] = [];

  deliveryItemForm: FormGroup = this.fb.group({
    description:
      [
        '',
        Validators.required,
      ],
    commodity:
      [
        '',
        Validators.required,
      ],
    items:
      [
        '',
        [Validators.required, realNumberValidator],
      ],
    totalWeight:
      [
        '',
        [Validators.required, realNumberValidator],
      ],
    length:
      [
        '',
        [Validators.required, realNumberValidator],
      ],
    width:
      [
        '',
        [Validators.required, realNumberValidator],
      ],
    height:
      [
        '',
        [Validators.required, realNumberValidator],
      ],
  });

  deliveryInfoGroup: FormGroup = this.fb.group({
    parcelType:
      [
        '',
        Validators.required,
      ],
    specialInstruction:
      [
        '',
      ],
    pickUpOption:
      [
        '',
      ],
    pickUpDate:
      [
        new Date(),
        Validators.required,
      ],
    pickUpReadyAt:
      [
        '',
        Validators.required,
      ],
    closingTime:
      [
        '',
        Validators.required,
      ],
    deliveryItems:
      [
        [],
        [
          Validators.required,
          (control: AbstractControl) =>

            control.value.length > 0 ? null :
              { itemLenght: true },
        ],
      ],
  });

  toUpdateIndex: number;

  @ViewChildren('descriptionField')
  descriptionField: QueryList<ElementRef>;

  pickerStyle: NgxMaterialTimepickerTheme = {
    dial:
    {
      dialBackgroundColor: '#760f29',
    },
    clockFace:
    {
      clockHandColor: '#760f29',
    },
    container:
    {
      buttonColor: '#760f29',
    },
  };

  public static itemIsDangerous(val: string): boolean {
    return val === 'Dangerous Goods';
  }

  ngOnInit() {
    this.deliveryInfoGroup.get('parcelType').valueChanges.subscribe((val) => {
      this.deliveryInfoGroup.get('specialInstruction').clearValidators();
      this.deliveryInfoGroup.get('specialInstruction').setValidators(

        DeliveryInfoComponent.itemIsDangerous(val) ? [
          Validators.required,
        ] :
          [],
      );
      this.deliveryInfoGroup.get('specialInstruction').setValue('');
      this.deliveryInfoGroup.get('specialInstruction').updateValueAndValidity();
    });
  }


  sanitizeItems() {
    const rawValue: string = this.deliveryItemForm.get('items').value;
    let sanitizedValue = rawValue;
    while (sanitizedValue.charAt(0) === '-') {
      sanitizedValue = sanitizedValue.substr(1);
    }
    while (sanitizedValue.endsWith('-')) {
      sanitizedValue = sanitizedValue.slice(0, -1);
    }
    this.deliveryItemForm.patchValue({
      phone: sanitizedValue,
    });
  }

  addItem() {
    const itemForm = this.deliveryItemForm;
    console.log('this.toUpdateIndex', this.toUpdateIndex);
    if (itemForm.valid) {
      if (this.toUpdateIndex !== undefined) {
        this.deliveryItems.splice(this.toUpdateIndex, 1, {
          description: itemForm.get('description').value,
          commodity: itemForm.get('commodity').value,
          items: itemForm.get('items').value,
          totalWeight: itemForm.get('totalWeight').value,
          length: itemForm.get('length').value,
          width: itemForm.get('width').value,
          height: itemForm.get('height').value,
        });
        // this.deliveryItems[this.toUpdateIndex] = ;
        this.toUpdateIndex = undefined;
      }
      else {
        this.deliveryItems.unshift({
          description: itemForm.get('description').value,
          commodity: itemForm.get('commodity').value,
          items: itemForm.get('items').value,
          totalWeight: itemForm.get('totalWeight').value,
          length: itemForm.get('length').value,
          width: itemForm.get('width').value,
          height: itemForm.get('height').value,
        });
      }
      this.deliveryItemForm.reset();
      this.deliveryInfoGroup.get('deliveryItems').setValue(this.deliveryItems);
      // hide and show the form for item form reseting validators
      this.itemFormShow = false;
      setTimeout(() => { this.itemFormShow = true });
      // hide and show the form for item form reseting validators
      this.itemFormShow = false;
      setTimeout(() => { this.itemFormShow = true });
    }

  }

  selectUpdateItem(item: { item: IDeliveryItem; index: number }) {
    for (const element of this.descriptionField.toArray()) {
      // focus on the from element
      const descInput = element.nativeElement as MatInput;
      descInput.focus();
      this.deliveryItemForm.reset();
      const itemForm = this.deliveryItemForm;
      const items = item.item;
      for (const key in items) {
        if (items.hasOwnProperty(key)) {
          const element = items[key];
          const formItem = itemForm.get(key);
          if (formItem) {
            formItem.setValue(element);
          }
        }
      }
      this.toUpdateIndex = item.index;
    }

  }

  deleteItem(item: { item: IDeliveryItem; index: number }) {
    this.deliveryItems.splice(item.index, 1);
    if (this.toUpdateIndex !== undefined) {
      if (this.toUpdateIndex === item.index) {
        this.resetForm();
      }
      else if (this.toUpdateIndex > item.index) {
        this.toUpdateIndex -= 1;
      }
    }
    this.deliveryInfoGroup.get('deliveryItems').setValue(this.deliveryItems);
  }

  deleteToEdit() {
    this.deleteItem({ item: undefined, index: this.toUpdateIndex });
    this.resetForm();
  }

  resetForm() {
    this.deliveryItemForm.reset();
    this.toUpdateIndex = undefined;
  }
}
