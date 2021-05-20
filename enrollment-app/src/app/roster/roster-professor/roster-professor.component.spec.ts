import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RosterProfessorComponent } from './roster-professor.component';

describe('RosterProfessorComponent', () => {
  let component: RosterProfessorComponent;
  let fixture: ComponentFixture<RosterProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RosterProfessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RosterProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
