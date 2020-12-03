import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private appService: AppService,
    private router: Router) { }

  ngOnInit(): void {
  }

  toggleLogin() {
    this.appService.isLogin = true;

    // * navigate to destination
    if (this.appService.redirectURL) {
      this.router.navigate([this.appService.redirectURL]);
      this.appService.redirectURL = null;
    } else {
      this.router.navigate(['/users']);
    }
  }

  toggleAdmin() {
    this.appService.isAdmin = true;
  }

}
