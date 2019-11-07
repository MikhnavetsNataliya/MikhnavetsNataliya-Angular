import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from "../auth/auth/auth.component";
import { UserService } from "../auth/services/user.service";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AuthComponent,

  ],
  providers: [
    UserService
  ]
})

export class CoreModule {
}
