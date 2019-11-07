import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { AlertComponent } from './alert/alert.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AlertComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AlertComponent,
    ButtonComponent
  ],
  providers: [
  ]
})

export class SharedModule { }
