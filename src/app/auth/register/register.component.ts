import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { AlertService } from '../../shared/alert/alert.service';
import { UserService } from '../services/user.service';
import {User }
from '../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  email: string;
  password: string;

  @Input()
  user: User;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
  ) {
  }

  ngOnInit() {
      this.registerForm = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  get formField() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.userService.register(this.registerForm.value.email, this.registerForm.value.password)
      .then(success => {
          this.alertService.success('Регистрация прошла успешно', true );
          this.router.navigate(['/login']);
        })
      .catch(error => {
          this.alertService.error(error);
        });
  }
}
