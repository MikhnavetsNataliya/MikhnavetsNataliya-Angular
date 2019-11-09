import { Component, OnInit } from '@angular/core';
import {UserService} from "../../auth/services/user.service";
import {Router} from "@angular/router";
import {AlertService} from "../../shared/alert/alert.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;
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
  }
}

