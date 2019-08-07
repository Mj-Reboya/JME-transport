import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryTableComponent } from './delivery-table.component';
import { AngularMaterialModules } from '../../modules/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DeliveryTableComponent', () => {
  let component: DeliveryTableComponent;
  let fixture: ComponentFixture<DeliveryTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryTableComponent],
      imports: [
        BrowserAnimationsModule,
        AngularMaterialModules,
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
