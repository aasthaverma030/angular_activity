import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../faculty.service';

@Component({
  selector: 'app-view-faculties',
  templateUrl: './view-faculties.component.html',
  styleUrls: ['./view-faculties.component.css']
})
export class ViewFacultiesComponent implements OnInit {

  constructor(private faculties : FacultyService ) {}

 facultyData :any =[];
  ngOnInit(): void {
    
        this.faculties.getAllFaculty().subscribe((allData) =>
           this.facultyData =allData
        );
          
      }
     
      
    
}
