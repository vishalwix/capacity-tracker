import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../_services';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const ACCTUser = this.authenticationService.ACCTValue;

        if (ACCTUser) {            
          // check if route is restricted by role
          if (route.data['roles'] && route.data['roles'].indexOf(ACCTUser.role) === -1) {
              // role not authorised so redirect to home page
              this.router.navigate(['/']);
              return false;
          }
          // authorised so return true
          return true;
      }
          this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
          return false;
    }
}
