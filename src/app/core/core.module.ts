import {NgModule} from '@angular/core';
import {AuthenticationService} from './services/authentication.service';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {GoogleSigninDirective} from './directives/google-signin.directive';
import {TwitterSigninDirective} from './directives/twitter-signin.directive';
import {AuthGuard} from './guards/auth.guard';
import {AngularFirestoreModule} from '@angular/fire/firestore';


@NgModule({
  imports: [
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [
    AuthenticationService,
    AuthGuard
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
