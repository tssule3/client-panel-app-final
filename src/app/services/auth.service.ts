import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Injectable()
export class AuthService {

  constructor(private auth: AngularFireAuth, private router: Router,
              private flash: FlashMessagesService) { }
  login(email, password) {

  }
}
