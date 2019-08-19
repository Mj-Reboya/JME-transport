import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { createCustomElement } from '@angular/elements';
import { Location } from '@angular/common';

import { AppComponent } from './app.component';
import { AngularMaterialModules } from './modules/angular-material.module';
import { LoginComponent } from './components/login/login.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { DeliveryInfoComponent } from './components/delivery-info/delivery-info.component';
import { PersonInfoComponent } from './components/person-info/person-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AvoidPasteForNonNumericDirective } from './directives/avoidCopyPaste';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { DeliveryTableComponent } from './components/delivery-table/delivery-table.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TransactionSummaryComponent } from './components/transaction-summary/transaction-summary.component';

const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'orderForm', component: OrderFormComponent },
  { path: 'admin', component: AdminDashboardComponent },
  // always put this on the end of the route
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrderFormComponent,
    DeliveryInfoComponent,
    PersonInfoComponent,
    AvoidPasteForNonNumericDirective,
    AdminDashboardComponent,
    DeliveryTableComponent,
    SignUpComponent,
    TransactionSummaryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModules,
    RouterModule.forRoot(APP_ROUTES, { useHash: true }),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(
    private injector: Injector,
    private location: Location,
    private router: Router
  ) {
    // const appComponentElement = createCustomElement(AppComponent, { injector });
    // customElements.define('app-root', appComponentElement);
    // // on every route change tell router to navigate to defined route
    // this.location.subscribe(data => {
    //   console.log('Data subscribe', data);
    //   this.router.navigateByUrl(data.url);
    // });
    // // using this router outlet is loaded normaly on init
    // this.router.navigateByUrl(this.location.path(true));
    // // event subscribe to detect route change inside angular
    // this.router.events.subscribe(data => {
    //   // console.log(data);
    // });
  }
  ngDoBootstrap() {}
}
