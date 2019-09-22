import {NgModule} from '@angular/core';
import {AuthenticationService} from './services/authentication.service';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {SharedModule} from '../shared/shared.module';
import { GoogleSigninDirective } from './directives/google-signin.directive';
import { TwitterSigninDirective } from './directives/twitter-signin.directive';


@NgModule({
  imports: [
    AngularFireAuthModule,
    SharedModule
  ],
  providers: [
    AuthenticationService
  ],
  declarations: [GoogleSigninDirective, TwitterSigninDirective]
})
export class CoreModule { }
