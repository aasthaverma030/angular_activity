import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewFacultiesComponent } from './view-faculties/view-faculties.component';
import { EditFacultyComponent } from './edit-faculty/edit-faculty.component';
import { PhdFacultyComponent } from './phd-faculty/phd-faculty.component';
import { HttpClientModule } from '@angular/common/http';
import { FacultyService} from './faculty.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ViewFacultiesComponent,
    EditFacultyComponent,
    PhdFacultyComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ FacultyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
