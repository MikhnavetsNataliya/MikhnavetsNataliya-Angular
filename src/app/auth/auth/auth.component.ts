
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';
import { AlertService } from '../../shared/alert/alert.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  /*isLoggedIn: boolean;
  loggedInUser: string;
  showRegister: boolean;

  constructor(
    private userService: UserService,
    private router: Router,
    private alertService: AlertService,
  ) {
  }

  ngOnInit() {
    this.userService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    });

    this.showRegister = true;
  }

  onLogoutClick() {
    this.userService.logout();
    this.alertService.success('Вы вышли!', true );
    this.router.navigate(['/login']);
  }*/
}

