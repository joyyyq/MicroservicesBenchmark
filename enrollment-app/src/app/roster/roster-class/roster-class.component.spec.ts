import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RosterClassComponent } from './roster-class.component';

describe('RosterClassComponent', () => {
  let component: RosterClassComponent;
  let fixture: ComponentFixture<RosterClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RosterClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RosterClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
