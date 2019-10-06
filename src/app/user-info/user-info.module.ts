import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserInfoRoutingModule} from './user-info-routing.module';
import {UserInfoComponent} from './user-info/user-info.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [UserInfoComponent],
  imports: [
    CommonModule,
    UserInfoRoutingModule,
    SharedModule
  ]
})
export class UserInfoModule { }
