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
prop = true;
isLoggedIn;
loggedInUser;
showRegister;
showDash;
  constructor(private service: AuthService, private router: Router,
              private flash: FlashMessagesService, private settingsService: SettingsService) { }

  ngOnInit() {
    this.service.getAuth().subscribe(
      auth => {if (auth) {
        this.isLoggedIn = true;
        this.showDash = true;
        this.loggedInUser = auth.email;
      } else { this.isLoggedIn = false; this.showDash = false; }}
    );
    this.showRegister = this.settingsService.getSettings().allowRegistration;
  }
  onLogOutClick() {
  this.service.logOut();
    this.flash.show('Logged Out', {cssClass: 'alert-secondary', timeout: 3000 } );
    setTimeout(() => {
      this.router.navigate(['/login']).then();
    }, 2000);
  }

}
