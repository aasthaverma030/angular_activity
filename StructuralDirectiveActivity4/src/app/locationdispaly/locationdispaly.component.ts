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
  selector: 'app-locationdispaly',
  templateUrl: './locationdispaly.component.html',
  styleUrls: ['./locationdispaly.component.css']
})
export class LocationdispalyComponent implements OnInit {

  constructor() { }

  facultyData: faculty[] = facultyData;
  ngOnInit(): void {
  }

}
