import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
/*
import { UserService } from "../auth/services/user.service";
*/
import {AuthModule} from "../auth/auth.module";

import { UserService } from "../auth-form/services/user.service";
import { AuthFormModule } from "../auth-form/auth-form.module";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
/*
    AuthModule,
*/
    AuthFormModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
  providers: [
    UserService
  ]
})

export class CoreModule {
}
