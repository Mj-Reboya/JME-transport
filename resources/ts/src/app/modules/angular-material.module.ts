import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatStepperModule } from '@angular/material/stepper';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

const ANGULAR_MATERIAL_MODULES = [
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTableModule,
  MatPaginatorModule,
  MatToolbarModule,
  MatStepperModule,
  NgxMaterialTimepickerModule
];

@NgModule({
  imports: ANGULAR_MATERIAL_MODULES,
  exports: ANGULAR_MATERIAL_MODULES,
  providers: [MatDatepickerModule]
})
export class AngularMaterialModules {}
