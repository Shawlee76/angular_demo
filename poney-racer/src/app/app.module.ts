import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PonyComponent } from './pony/pony.component';
import { RacesComponent } from './races/races.component';
import { PoniesComponent } from './ponies/ponies.component';

@NgModule({
  declarations: [
    AppComponent,
    PonyComponent,
    RacesComponent,
    PoniesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
