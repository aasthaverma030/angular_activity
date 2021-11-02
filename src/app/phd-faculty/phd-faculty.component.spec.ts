import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhdFacultyComponent } from './phd-faculty.component';

describe('PhdFacultyComponent', () => {
  let component: PhdFacultyComponent;
  let fixture: ComponentFixture<PhdFacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhdFacultyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhdFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
