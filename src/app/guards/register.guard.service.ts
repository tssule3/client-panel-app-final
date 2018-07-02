import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {SettingsService} from '../services/settings.service';
import {Observable} from 'rxjs';

@Injectable()
export class RegisterGuardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.settingService.getSettings().allowRegistration) {
      return true;
    } else {
      this.router.navigate(['/login']).then();
      return false;
    }
  }

  constructor(private settingService: SettingsService, private router: Router) { }
}
