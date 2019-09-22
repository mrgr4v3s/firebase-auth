import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../shared/models/user.model';
import {auth} from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userState = new BehaviorSubject<User>(null);

  private user$ = this.userState.asObservable();

  constructor(private fireAuth: AngularFireAuth) { }

  async googleSignIn() {
    const authProvider = new auth.GoogleAuthProvider();
    const credentials = await this.fireAuth.auth.signInWithPopup(authProvider);

    this.userState.next(credentials.user);
  }

  async twitterSignIn() {
    const authProvider = new auth.TwitterAuthProvider();
    const credentials = await this.fireAuth.auth.signInWithPopup(authProvider);

    this.userState.next(credentials.user);
  }

  get user(): Observable<User> {
    return this.user$;
  }
}
