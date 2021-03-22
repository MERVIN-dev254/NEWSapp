import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NewsService} from '../app/news.service';
import { NavComponent } from './nav/nav.component';
import { SiteComponent } from './site/site.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
