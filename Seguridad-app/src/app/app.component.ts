import { Router } from '@angular/router';
import { SecurityService } from './services/security.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Seguridad-app';

  constructor
  (private security: SecurityService,
    private Router: Router
    ){

  }
  logedIn(){
    return this.security.logedIn();
  }

  onLogout(){
this.security.logout();
this.Router.navigate(['login']);
  }
}
