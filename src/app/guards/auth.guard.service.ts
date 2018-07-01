import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs';
import {map} from 'rxjs/internal/operators';

@Injectable()
export class AuthGuardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot,
               state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.authState.pipe(
      map(
        (auth) => {
          if (!auth) {
            this.router.navigate(['/login']);
            return false;
          } else { return true; }
        }
      )
    );
  }

  constructor(private auth: AngularFireAuth, private router: Router) { }
}
