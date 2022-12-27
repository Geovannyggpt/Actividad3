import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import { CarruselComponent } from './carrusel/carrusel.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
