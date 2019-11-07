import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from "./about/about.component";
import { NotFoundComponent } from "./not-found/not-found.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'direction',
    loadChildren: () => import('./direction/direction.module').then(m => m.DirectionModule),
    redirectTo: 'direction/type/водный'
  },
  /*{
    path: 'direction',
    redirectTo: 'direction/type/водный'
  },*/
  {
    path: 'contact',
    loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule),
    pathMatch: 'full',
    component: ContactComponent
  },
  {
    path: 'about',
    pathMatch: 'full',
    component: AboutComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent
  },
  /*{
    path: 'users',
    loadChildren: () => import('app/users/users.module').then(m => m.UsersModule)
  }*/
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
