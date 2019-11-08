import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { AlertService } from '../../shared/alert/alert.service';
import { UserService } from '../services/user.service'

import { User } from '../auth-form.interface'

@Component({
  selector: 'app-auth-field-common',
  templateUrl: './auth-field-common.component.html',
  styleUrls: ['./auth-field-common.component.css']
})
export class AuthFieldCommonComponent  {

  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  email: string;
  password: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
  ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get formField() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.userService.login(this.email, this.password)
      .then(success=> {
        this.router.navigate([this.returnUrl]);
      })
      .catch(error => {
        this.alertService.error(error);
      })
  }
}
