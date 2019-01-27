import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginApi = 'http://localhost:3000/v1/login/';
  private loginFbApi = 'http://localhost:3000/v1/login/facebook';
  private loginGoApi = 'http://localhost:3000/v1/login/google';

  constructor(private http: HttpClient) { }
  getData(direct) {
    if ( direct === 'default' ) {
      return this.http.get(this.loginApi);
    } else if ( direct === 'facebook' ) {
      return this.http.get(this.loginFbApi);
    } else {
      return this.http.get(this.loginGoApi);
    }
  }

  getAuthen(direct) {
    this.getData(direct).subscribe(data => {
      console.log(data);
    });
  }
}
