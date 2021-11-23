import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {TestResponse} from "../models/test-response";

@Injectable({
  providedIn: 'root'
})
export class TestResponseService {

  constructor(private httpClient: HttpClient) { }

  getResponse(): Observable<TestResponse>{
    return this.httpClient.get<TestResponse>(environment.appUrl+'/hello');
  }
}
