import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from '../../shared/models/user.model';
import {auth} from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user$: Observable<User>;

  constructor(private fireAuth: AngularFireAuth,
              private firestore: AngularFirestore,
              private route: Router) {
    this.user$ = fireAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.firestore.doc<User>(`user/${user.uid}`).valueChanges();
        }

        return of(null);
      })
    );
  }

  async googleSignIn() {
    const authProvider = new auth.GoogleAuthProvider();
    const credentials = await this.fireAuth.auth.signInWithPopup(authProvider);

    this.route.navigateByUrl('/user');

    return this.updateUser(credentials.user);
  }

  async twitterSignIn() {
    const authProvider = new auth.TwitterAuthProvider();
    const credentials = await this.fireAuth.auth.signInWithPopup(authProvider);

    await this.route.navigateByUrl('/user');

    return this.updateUser(credentials.user);
  }

  async emailPasswordSignIn(email: string, password: string) {
    const credentials = await this.fireAuth.auth.signInWithEmailAndPassword(email, password);

    await this.route.navigate(['/user']);

    return this.updateUser(credentials.user);
  }

  async createUser(email: string, password: string) {
    const credentials = await this.fireAuth.auth.createUserWithEmailAndPassword(email, password);

    this.route.navigateByUrl('/user');

    return this.updateUser(credentials.user);
  }

  async resetUserPassword(email: string) {
    await this.fireAuth.auth.sendPasswordResetEmail(email);
  }

  async signOut() {
    await this.fireAuth.auth.signOut();
    this.route.navigateByUrl('/login');
  }

  private updateUser(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.firestore.doc<User>(`user/${user.uid}`);

    const data: User = {
      uid: user.uid,
      photoURL: user.photoURL,
      email: user.email,
      displayName: user.displayName
    };

    return userRef.set(data, { merge: true });
  }
}
