import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Environment} from "@angular/compiler-cli/src/ngtsc/typecheck/src/environment";
import {environment} from "../environments/environment";
import {TestResponseService} from "./service/test-response.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{

  responseMessage?:string;

  constructor(private testResponseService: TestResponseService) {
  }

  ngOnInit(): void {
    this.testResponseService.getResponse().subscribe((res)=>{
      console.log(res);
      this.responseMessage = res.message;
    })
  }
}
