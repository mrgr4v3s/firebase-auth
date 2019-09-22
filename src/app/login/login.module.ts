import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import {SharedModule} from '../shared/shared.module';
import { EmailPasswordComponent } from './email-password/email-password.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, EmailPasswordComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
