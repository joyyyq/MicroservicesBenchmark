import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RosterSearchComponent } from './roster-search.component';

describe('RosterSearchComponent', () => {
  let component: RosterSearchComponent;
  let fixture: ComponentFixture<RosterSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RosterSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RosterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
