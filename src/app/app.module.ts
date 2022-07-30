import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PassengersComponent } from './components/passengers/passengers.component';
import { DataComponent } from './components/data/data.component';
import { SidebarComponent } from './components/data/sidebar/sidebar.component';

import { ResponsivetableComponent } from './components/data/responsivetable/responsivetable.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MapComponent } from './components/data/map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PassengersComponent,
    DataComponent,
    SidebarComponent,
    ResponsivetableComponent,
    MapComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
