import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthenticationService} from '../../core/services/authentication.service';
import {User} from '../../shared/models/user.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit, OnDestroy {
  user: User;
  subscription: Subscription;

  constructor(public authService: AuthenticationService) { }

  ngOnInit(): void {
    this.subscription = this.authService.user$.subscribe(user => {
      this.user = user;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
