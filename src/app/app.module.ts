import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GeneralModule } from './general/general.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DirectionFullViewComponent } from './direction/containers/direction-full-view/direction-full-view.component';
import { DirectionListComponent } from './direction/components/direction-list/direction-list.component';
import { DirectionViewComponent } from './direction/components/direction-view/direction-view.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'direction',
    /*component: DirectionComponent*/
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }

];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NotFoundComponent,
    DirectionComponent,
    AboutComponent,
    DirectionFullViewComponent,
    DirectionListComponent,
    DirectionViewComponent,
  ],
  imports: [
    BrowserModule,
    GeneralModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
