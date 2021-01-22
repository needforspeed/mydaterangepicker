import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyDateRangePickerModule } from 'projects/my-date-range-picker/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyDateRangePickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
