import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../core/services/authentication.service';

@Component({
  selector: 'app-email-password',
  templateUrl: './email-password.component.html',
  styleUrls: ['./email-password.component.scss']
})
export class EmailPasswordComponent implements OnInit {
  form: FormGroup;

  type: 'login' | 'signup' | 'reset' = 'login';

  message: string;

  constructor(private fb: FormBuilder, private authService: AuthenticationService) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ],
      passwordConfirm: [
        '',
        []
      ]
    });
  }

  onSubmit() {
    try {
      if (this.isLogin) {
        this.authService.emailPasswordSignIn(this.email.value, this.password.value);
      }

      if (this.isSignup) {
        this.authService.createUser(this.email.value, this.password.value);
      }

      if (this.isReset) {
        this.authService.resetUserPassword(this.email.value);
      }
    } catch (e) {
      this.message = e;
    }
  }

  changeType(type: 'login' | 'signup' | 'reset') {
    this.type = type;
  }

  get isLogin(): boolean {
    return this.type === 'login';
  }

  get isReset(): boolean {
    return this.type === 'reset';
  }

  get isSignup(): boolean {
    return this.type === 'signup';
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get passwordConfirm() {
    return this.form.get('passwordConfirm');
  }

  get passwordMatch(): boolean {
    if (this.type !== 'signup') {
      return true;
    }

    return this.password.value === this.passwordConfirm.value;
  }
}
