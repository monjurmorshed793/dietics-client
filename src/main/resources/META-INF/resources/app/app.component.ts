import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Environment} from "@angular/compiler-cli/src/ngtsc/typecheck/src/environment";
import {environment} from "../environments/environment";
import {TestResponseService} from "./service/test-response.service";
import {KeycloakProfile} from "keycloak-js";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  isLoggedIn = false;
  userProfile: KeycloakProfile | null = null;
  responseMessage?:string;

  constructor(private testResponseService: TestResponseService, private readonly keycloak: KeycloakService) {
  }

  ngOnInit(): void {
    this.keycloak.isLoggedIn().then((res)=>{
      this.isLoggedIn = res;
      if(this.isLoggedIn){
        this.testResponseService.getResponse().subscribe((res)=>{
          console.log(res);
          this.responseMessage = res.message;
        })
      }else{
        this.login();
      }
    });
  }

  public login(){
    this.keycloak.login();
  }

  public logout(){
    this.keycloak.logout();
  }
}
