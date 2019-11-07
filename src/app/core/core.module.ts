import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from "../auth/auth/auth.component";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AuthComponent,

  ],
  providers: [
  ]
})

export class CoreModule { }
