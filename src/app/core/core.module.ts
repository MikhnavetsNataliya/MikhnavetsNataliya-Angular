import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserService } from "../auth/services/user.service";
import {AuthModule} from "../auth/auth.module";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthModule
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
