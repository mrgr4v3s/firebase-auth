import {NgModule} from '@angular/core';
import {MatButtonModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  imports: [
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule
  ]
})
export class SharedModule { }
