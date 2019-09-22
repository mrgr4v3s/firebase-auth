import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';
import { LoginButtonComponent } from './buttons/login-button/login-button.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';


@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    CoreModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    LoginButtonComponent,
    MatCardModule
  ],
  declarations: [
    LoginButtonComponent
  ]
})
export class SharedModule { }
