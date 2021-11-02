import { Component, OnInit } from '@angular/core';
import  facultyData  from  '../info.json';
interface faculty{
  facultyId : number;
  facultyName : string;
  facultyMobile : number;
  facultyEmail : string;
  highestQualification : string,
  workLocation : string
}


@Component({
  selector: 'app-faculty-details',
  templateUrl: './faculty-details.component.html',
  styleUrls: ['./faculty-details.component.css']
})
export class FacultyDetailsComponent implements OnInit {
  
  // constructor(private user: UserinfoService) { 
  //   this.user.getInfo().subscribe(data=>
  //     {
  //       console.log(data);
  //     }
  //     )
  // }
  facultyData: faculty[] = facultyData;

  ngOnInit(): void {
  }

}
