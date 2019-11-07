import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {SharedModule} from "../shared/shared.module";

const routes: Routes = [
  {path: '/auth/login', component: LoginComponent},
  {path: '/auth/register', component: RegisterComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    RouterModule,
  ]
})
export class AuthRoutingModule {
}
