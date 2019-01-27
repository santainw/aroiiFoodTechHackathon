import { Injectable } from '@angular/core';

/** Connnect Import */
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class IssueService {

   /**  'http://localhost:3000/v1/get/indexPage/head'  */

   constructor( private http: HttpClient) { }

   getIssues() {
     return this.http.get('http://localhost:3000/v1/get/indexPage/head');
   }

}
