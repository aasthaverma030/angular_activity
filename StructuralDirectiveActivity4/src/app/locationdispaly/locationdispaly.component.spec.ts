import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationdispalyComponent } from './locationdispaly.component';

describe('LocationdispalyComponent', () => {
  let component: LocationdispalyComponent;
  let fixture: ComponentFixture<LocationdispalyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationdispalyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationdispalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
