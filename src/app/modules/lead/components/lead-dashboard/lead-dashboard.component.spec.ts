import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadDashboardComponent } from './lead-dashboard.component';

describe('LeadDashboardComponent', () => {
  let component: LeadDashboardComponent;
  let fixture: ComponentFixture<LeadDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadDashboardComponent]
    });
    fixture = TestBed.createComponent(LeadDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
