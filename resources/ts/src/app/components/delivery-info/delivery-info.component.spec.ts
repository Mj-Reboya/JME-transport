import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryInfoComponent } from './delivery-info.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularMaterialModules } from '../../modules/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DeliveryInfoComponent', () => {
  let component: DeliveryInfoComponent;
  let fixture: ComponentFixture<DeliveryInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryInfoComponent],
      imports: [
        BrowserAnimationsModule,
        AngularMaterialModules,
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
