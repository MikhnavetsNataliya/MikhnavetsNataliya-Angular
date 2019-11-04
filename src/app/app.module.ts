import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GeneralModule } from './general/general.module';
import { DirectionModule } from './direction/direction.module';

import { HomeComponent } from './home/home.component';
import { DirectionTypeViewComponent } from "./direction/containers/direction-type-view/direction-type-view.component";
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';

import { FakeBackendInterceptor } from './fake-back-end/fake-back-end.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    GeneralModule,
    /*DirectionModule,*/
    FormsModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
