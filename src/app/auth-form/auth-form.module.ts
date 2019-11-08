import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { AuthFormComponent } from './auth-form/auth-form.component';
import { AuthFieldCommonComponent } from './auth-field-common/auth-field-common.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  declarations: [
    AuthFormComponent,
    AuthFieldCommonComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule

  ],
  exports: [
    AuthFormComponent,
    AuthFieldCommonComponent,
    LoginComponent,
    RegisterComponent,
  ]
})
export class AuthFormModule { }
