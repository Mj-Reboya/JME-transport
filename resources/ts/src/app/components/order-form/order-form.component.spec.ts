import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFormComponent } from './order-form.component';
import { AngularMaterialModules } from '../../modules/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeliveryInfoComponent } from '../delivery-info/delivery-info.component';
import { PersonInfoComponent } from '../person-info/person-info.component';
import { RouterModule } from '@angular/router';

describe('OrderFormComponent', () => {
  let component: OrderFormComponent;
  let fixture: ComponentFixture<OrderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OrderFormComponent,
        DeliveryInfoComponent,
        PersonInfoComponent
      ],
      imports: [
        BrowserAnimationsModule,
        AngularMaterialModules,
        RouterModule.forRoot([]),
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
