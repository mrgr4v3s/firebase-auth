import {NgModule} from '@angular/core';
import {AuthenticationService} from './services/authentication.service';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {GoogleSigninDirective} from './directives/google-signin.directive';
import {TwitterSigninDirective} from './directives/twitter-signin.directive';


@NgModule({
  imports: [
    AngularFireAuthModule
  ],
  providers: [
    AuthenticationService
  ],
  exports: [
    GoogleSigninDirective,
    TwitterSigninDirective
  ],
  declarations: [
    GoogleSigninDirective,
    TwitterSigninDirective
  ]
})
export class CoreModule { }
