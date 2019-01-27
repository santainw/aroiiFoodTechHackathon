import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private appComponent: AppComponent) { }

  logOut() {
    this.appComponent.isLoggedIn = false;
  }
}
