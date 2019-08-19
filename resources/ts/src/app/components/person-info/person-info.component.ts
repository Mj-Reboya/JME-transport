import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { numOnly } from '../../util/input';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.scss']
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
    'Western Australia'
  ];

  numOnly = numOnly;

  sameAsSender: FormControl = new FormControl(false);

  personInfoGroup: FormGroup = this.fb.group({
    name: ['', Validators.required],
    bookingDate: [new Date(), Validators.required],
    company: ['', Validators.required],
    streetAddress: ['', Validators.required],
    suburd: [''],
    state: [''],
    postalCode: [''],
    phone: ['', Validators.required]
  });

  get sameAsSenderValue() {
    return this.sameAsSender.value;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  sameAsSenderChanged(event: boolean) {
    console.log('sameAsSenderChanged', event);
    this.sameAsSenderClicked.emit(event);
    if (event) {
      this.personInfoGroup.disable();
    } else {
      this.personInfoGroup.enable();
    }
  }
}
