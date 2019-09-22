import {Directive, HostListener} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Directive({
  selector: '[appTwitterSignin]'
})
export class TwitterSigninDirective {

  constructor(private authService: AuthenticationService) { }

  @HostListener('click')
  onClick() {
    this.authService.twitterSignIn();
  }
}
