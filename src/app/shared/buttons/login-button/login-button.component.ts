import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent {
  @Input()
  buttonName: string;

  @Input()
  buttonType: 'google' | 'twitter';

  constructor() { }

}
