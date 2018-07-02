import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {SettingsService} from '../../services/settings.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showDash;
prop = true;
isLoggedIn;
loggedInUser;
showRegister;
  constructor(private service: AuthService, private router: Router,
              private flash: FlashMessagesService, private settingsService: SettingsService) { }

  ngOnInit() {
    if (this.isLoggedIn || this.showRegister) {this.showDash = false; } else {this.showDash = true;}
    this.service.getAuth().subscribe(
      auth => {if (auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      } else { this.isLoggedIn = false; }}
    );
    this.showRegister = this.settingsService.getSettings().allowRegistration;
  }
  onLogOutClick() {
  this.service.logOut();
    this.flash.show('Logged Out', {cssClass: 'alert-secondary', timeout: 3000 } );
    this.isLoggedIn = true;
    setTimeout(() => {
      this.router.navigate(['/login']).then();
    }, 2000);
  }

}
