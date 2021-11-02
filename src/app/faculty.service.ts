import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  url = "/assets/data/fac.json";
  constructor(private http : HttpClient) { }
getAllFaculty(){ 
 return this.http.get(this.url);

}
getFacultyById(facultyId : number){
  return this.http.get(`${this.url}/${facultyId}`);
}
updateFacultyData(facultyId:number,data:any){
return this.http.put(`${this.url}/${facultyId}`,data);
 }
}