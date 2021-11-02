import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacultyDetailsComponent } from './faculty-details/faculty-details.component';
import { LocationdispalyComponent } from './locationdispaly/locationdispaly.component';

@NgModule({
  declarations: [
    AppComponent,
    FacultyDetailsComponent,
    LocationdispalyComponent
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
