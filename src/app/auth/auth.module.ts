import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {AuthRoutingModule} from './auth-routing.module';

import {AuthComponent} from './auth/auth.component';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
  ]
})
export class AuthModule {
}
