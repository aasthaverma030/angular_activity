import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultyDetailsComponent } from './faculty-details/faculty-details.component';
import { LocationdispalyComponent } from './locationdispaly/locationdispaly.component';

const routes: Routes = [
  {path:'fac', component:FacultyDetailsComponent},
  {path:'loc', component:LocationdispalyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
