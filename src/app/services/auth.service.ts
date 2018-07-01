import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Injectable()
export class AuthService {

  constructor(private auth: AngularFireAuth, private router: Router,
              private flash: FlashMessagesService) { }
  login(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        this.auth.auth.signInWithEmailAndPassword(email, password).then(
          (userData) => resolve(userData), err => reject(err)
        );
      }
    );
  }
  register(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        this.auth.auth.createUserWithEmailAndPassword(email, password).then(
          (userData) => resolve(userData), err => reject(err)
        );
      }
    );
  }
  getAuth() {
    return this.auth.authState.pipe(
      auth => auth
    );
  }
  logOut() {
    this.auth.auth.signOut().then(
    );
  }
}
