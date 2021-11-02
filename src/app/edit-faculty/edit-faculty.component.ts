import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FacultyService } from '../faculty.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-faculty',
  templateUrl: './edit-faculty.component.html',
  styleUrls: ['./edit-faculty.component.css']
})
export class EditFacultyComponent implements OnInit {

  constructor(private faculties : FacultyService,private router: ActivatedRoute) { }
 editFaculty = new FormGroup({
   facultyId : new FormControl(''),
  facultyName : new FormControl(''),
  facultyMobile : new FormControl(''),
  facultyEmail : new FormControl(''),
  highestQualification: new FormControl(''),
  workLocation : new FormControl('')
 });

  ngOnInit(): void {
    //console.log(this.router.snapshot.params.facultyId);
    this.faculties.getFacultyById(this.router.snapshot.params.facultyId).subscribe((result:any)=>{
      //console.log(result);
      this.editFaculty = new FormGroup({
        facultyId: new FormControl(result['FacultyId']),
        facultyName: new FormControl(result['FacultyName']),
        facultyMobile : new FormControl(result['FacultyMobile']),
        facultyEmail: new FormControl(result['FacultyEmail']),
        HighestQualification: new FormControl(result['hightestQualification']),
        WorkLocation: new FormControl(result['workLocation']),


      });
     });

  }
  updateData(){
  console.log(this.editFaculty.value);
    this.faculties.updateFacultyData(this.router.snapshot.params.facultyId,this.editFaculty.value).
    subscribe((result:any) =>
      console.log(result)
    );
  }

}
