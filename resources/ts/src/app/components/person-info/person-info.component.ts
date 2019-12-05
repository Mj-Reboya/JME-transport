import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { numOnly } from '../../util/input';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { InputCacheService } from 'src/app/service/input-cache.service';
import { debounce, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls:
    [
      './person-info.component.scss',
    ],
})
export class PersonInfoComponent implements OnInit {
  @Input() title = '';
  @Input() hasSameAsButton = false;

  @Output() sameAsSenderClicked = new EventEmitter<boolean>();

  states = [
    'New South Wales',
    'Queensland',
    'South Australia',
    'Tasmania',
    'Victoria',
    'Western Australia',
  ];

  numOnly = numOnly;

  sameAsSender: FormControl = new FormControl(false);

  personInfoGroup: FormGroup = this.fb.group({
    name:
      [
        '',
        Validators.required,
      ],
    bookingDate:
      [
        new Date(),
        Validators.required,
      ],
    company:
      [
        '',
        Validators.required,
      ],
    streetAddress:
      [
        this.getInputCached('streetAddress'),
        Validators.required,
      ],
    suburd:
      [
        this.getInputCached('suburd'),
        Validators.required,
      ],
    state:
      [
        this.getInputCached('state'),
        Validators.required,
      ],
    postalCode:
      [
        this.getInputCached('postalCode'),
        Validators.required,
      ],
    phone:
      [
        this.getInputCached('phone'),
        Validators.required,
      ],
    email:
      [
        this.getInputCached('email'),
        Validators.required,
      ],
  });

  get sameAsSenderValue() {
    return this.sameAsSender.value;
  }

  constructor(
    private fb: FormBuilder,
    private inputCacheService: InputCacheService
  ) {
  }

  ngOnInit() {
    this.personInfoGroup.valueChanges
      .pipe(debounceTime(500)).subscribe(data => {
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            const value = data[key];
            this.saveInputCached(key, value);
          }
        }
        return data;
      });
  }

  updateInputUsingCached() {
    const cachedDefault = {
      name: '',
      bookingDate: new Date(),
      company: '',
      streetAddress: this.getInputCached('streetAddress'),
      suburd: this.getInputCached('suburd'),
      state: this.getInputCached('state'),
      postalCode: this.getInputCached('postalCode'),
      phone: this.getInputCached('phone'),
      email: this.getInputCached('email'),
    };

    for (const key in cachedDefault) {
      if (cachedDefault.hasOwnProperty(key)) {
        const value = cachedDefault[key];
        const control = this.personInfoGroup.get(key);
        if (control) {
          control.setValue(value);
        }
      }
    }

  }

  saveInputCached(key: string, value: string) {
    this.inputCacheService.updateItem(`${this.title}_${key}`, value);
  }

  getInputCached(key: string) {
    return this.inputCacheService.getItem(`${this.title}_${key}`);
  }

  sanitizePhone() {
    const rawValue: string = this.personInfoGroup.get('phone').value;
    let sanitizedValue = rawValue;
    while (sanitizedValue.charAt(0) === '-') {
      sanitizedValue = sanitizedValue.substr(1);
    }
    while (sanitizedValue.endsWith('-')) {
      sanitizedValue = sanitizedValue.slice(0, -1);
    }
    this.personInfoGroup.patchValue({
      phone: sanitizedValue,
    });
  }

  sameAsSenderChanged(event: boolean) {
    // console.log('sameAsSenderChanged', event);
    this.sameAsSenderClicked.emit(event);
    if (event) {
      this.personInfoGroup.disable();
    } else {
      this.personInfoGroup.enable();
    }
  }
}
