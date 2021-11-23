import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {KeycloakAuthGuard} from "keycloak-angular";
import {AuthGuardService} from "./security/auth-guard.service";

const routes: Routes = [
  {
    path:'', pathMatch: 'full', redirectTo:'home'
  },
  {
    path:'home',
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
