import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditFacultyComponent } from './edit-faculty/edit-faculty.component';
import { PhdFacultyComponent } from './phd-faculty/phd-faculty.component';
import { ViewFacultiesComponent } from './view-faculties/view-faculties.component';

const routes: Routes = [
  
// {path:'view', component: 'ViewFacultydetails'},
{path:'view', component:ViewFacultiesComponent},
{path:'edit/:facultyId' , component:EditFacultyComponent},
{path:'phd', component:PhdFacultyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
