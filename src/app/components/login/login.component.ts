import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {SettingsService} from '../../services/settings.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn;
  showRegister;
  checklogin = true;
email: string;
password: string;
  constructor(private authService: AuthService, private flash: FlashMessagesService,
              private router: Router, private settingsService: SettingsService) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(
      auth => {if (auth) {
        this.isLoggedIn = true;
        setTimeout(() => {
          this.router.navigate(['/']).then(
            () => {
            }
          );
        }, 1000);
      } else {  this.isLoggedIn = false; }}
    );
    this.showRegister = this.settingsService.getSettings().allowRegistration;
  }
  onSubmit() {
    if ( this.email === undefined || this.password === undefined) {
      this.flash.show('Please Fill Email & Password ', {cssClass: 'alert-danger', timeout: 4000});
    } else {
    this.authService.login(this.email, this.password).then(
      res => {
        this.flash.show('Logged In', {cssClass: 'alert-success', timeout: 4000});
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1000);
      }
    ) .catch(
      err => {
        this.flash.show('Email/Password Invalid', {cssClass: 'alert-danger', timeout: 4000});
      }
    );
  }
  }
}
