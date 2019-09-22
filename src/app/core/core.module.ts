import {NgModule} from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  imports: [
    AngularFireAuthModule,
    SharedModule
  ],
  providers: [
    AuthenticationService
  ]
})
export class CoreModule { }
