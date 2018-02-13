import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SuccessAlartComponent } from './success-alart/success-alart.component';
import { WarningAlartComponent } from './warning-alart/warning-alart.component';


@NgModule({
  declarations: [
    AppComponent,
    WarningAlartComponent,
    SuccessAlartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
