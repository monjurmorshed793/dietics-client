import { Injectable } from '@angular/core';
import {KeycloakAuthGuard, KeycloakService} from "keycloak-angular";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService extends KeycloakAuthGuard{

  constructor(protected readonly router: Router,
              protected readonly keycloak: KeycloakService) {
    super(router, keycloak);
  }

  public async isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    if(!this.authenticated){
      await this.keycloak.login({
        redirectUri: window.location.origin+state.url,
      });
    }
    const requiredRoles = route.data.roles;

    if(!(requiredRoles instanceof Array) || requiredRoles.length === 0){
      return true;
    }
    return requiredRoles.every((role)=> this.roles.includes(role));
  }


}
