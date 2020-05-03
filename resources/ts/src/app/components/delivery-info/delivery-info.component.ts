import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
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
export class DeliveryInfoComponent implements OnInit, AfterViewInit {

  get isDangerousSelected() {
    return this.deliveryInfoGroup && this.deliveryInfoGroup.get('parcelType').value === 'Dangerous Goods';
  }

  constructor(private fb: FormBuilder) { }

  numOnly = numOnly;

  itemFormShow = true;

  @ViewChild('itemForm', { static: false })
  itemForm: FormGroupDirective;

  @ViewChild('infoForm', { static: false })
  infoForm: FormGroupDirective;
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
      ],
    commodity:
      [
        '',
      ],
    items:
      [
        '',
        [realNumberValidator],
      ],
    totalWeight:
      [
        '',
        [realNumberValidator],
      ],
    length:
      [
        '',
        [realNumberValidator],
      ],
    width:
      [
        '',
        [realNumberValidator],
      ],
    height:
      [
        '',
        [realNumberValidator],
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

  @Output() formModeChanged = new EventEmitter<'add' | 'update'>();

  private toUpdateIndexVal: number;

  set toUpdateIndex(value: number) {
    this.toUpdateIndexVal = value;
    this.formModeChanged.emit(this.toUpdateIndexVal !== undefined ? 'update' : 'add');
  }

  get toUpdateIndex(): number {
    return this.toUpdateIndexVal;
  }


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

  ngAfterViewInit(): void {
    this.infoForm.ngSubmit.subscribe(() => {
      this.resetForm();
    });
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
    for (const key in itemForm.value) {
      if (itemForm.value.hasOwnProperty(key)) {
        const val = itemForm.value[key];
        if (!val || val.lenght === 0) {
          return;
        }
      }
    }
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
      } else {
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
      // this.deliveryItemForm.reset();
      this.resetForm();
      this.deliveryInfoGroup.get('deliveryItems').setValue(this.deliveryItems);
      // hide and show the form for item form reseting validators
      // this.itemFormShow = false;
      // setTimeout(() => { this.itemFormShow = true; });
      // // hide and show the form for item form reseting validators
      // this.itemFormShow = false;
      // setTimeout(() => { this.itemFormShow = true; });
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
          const el = items[key];
          const formItem = itemForm.get(key);
          if (formItem) {
            formItem.setValue(el);
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
      } else if (this.toUpdateIndex > item.index) {
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
    // this.deliveryItemForm.reset
    this.deliveryItemForm.markAsPristine();
    this.deliveryItemForm.markAsUntouched();
    this.itemForm.resetForm();
    this.deliveryItemForm.reset();
    this.toUpdateIndex = undefined;
    // hide and show the form for item form reseting validators
    // this.itemFormShow = false;
    // setTimeout(() => { this.itemFormShow = true; });
  }
}
