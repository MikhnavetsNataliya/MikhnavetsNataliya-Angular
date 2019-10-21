import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Router } from '@angular/router';

import { FakeBackendInterceptor } from './fake-back-end/fake-back-end.interceptor';

import { AppComponent } from './app.component';
import { GeneralModule } from './general/general.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DirectionModule } from './direction/direction.module';
/*import { DirectionFullViewComponent } from './direction/containers/direction-full-view/direction-full-view.component';
import { DirectionListComponent } from './direction/components/direction-list/direction-list.component';
import { DirectionViewComponent } from './direction/components/direction-view/direction-view.component';*/
import { DirectionTypeViewComponent } from "./direction/containers/direction-type-view/direction-type-view.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'direction',
    redirectTo: 'type/водный',
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
    AboutComponent,
   /* DirectionFullViewComponent,
    DirectionListComponent,
    DirectionViewComponent,
    DirectionTypeViewComponent*/
  ],
  imports: [
    BrowserModule,
    GeneralModule,
    DirectionModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    /*provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true*/
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
