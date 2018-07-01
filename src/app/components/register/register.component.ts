import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
email: string; password: string;
  constructor(private authService: AuthService, private flash: FlashMessagesService,
              private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    if ( this.email === undefined || this.password === undefined) {
      this.flash.show('Please Fill Email & Password ', {cssClass: 'alert-danger', timeout: 4000});
    } else {
      this.authService.register(this.email, this.password).then(
        res => {
          this.flash.show('You Are Registered & Logged In', {cssClass: 'alert-success', timeout: 4000});
         setTimeout(() => { this.router.navigate(['/']).then(); },
           1000);
        }
      ) .catch(
        err => {
          this.flash.show('Email/Password Invalid', {cssClass: 'alert-danger', timeout: 4000});
        }
      );
    }
  }
}
