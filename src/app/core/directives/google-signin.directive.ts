import {Directive, HostListener} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {

  constructor(private authService: AuthenticationService) { }

  @HostListener('click')
  onClick() {
    this.authService.googleSignIn();
  }
}
