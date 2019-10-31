import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
/*
import { DirectionTypeViewComponent } from "./direction/containers/direction-type-view/direction-type-view.component";
*/
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from "./about/about.component";
import { NotFoundComponent } from "./not-found/not-found.component";

import { DirectionModule } from "./direction/direction.module";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'direction',
    redirectTo: 'direction/водный',
  },
  {
    path: 'contact',
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
    loadChildren: 'app/users/users.module#UsersModule'
  }*/
];

@NgModule({
  imports: [
    DirectionModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
