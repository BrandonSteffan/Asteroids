import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsteroidComponent } from './components/asteroid/asteroid.component';
import { HttpClientModule } from "@angular/common/http";
import { AsteroidListComponent } from './components/asteroid-list/asteroid-list.component';
import { AsteroidDetailsComponent } from './components/asteroid-details/asteroid-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AsteroidComponent,
    AsteroidListComponent,
    AsteroidDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
