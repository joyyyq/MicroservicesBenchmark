import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorCardComponent } from './professor-card.component';

describe('ProfessorCardComponent', () => {
  let component: ProfessorCardComponent;
  let fixture: ComponentFixture<ProfessorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
