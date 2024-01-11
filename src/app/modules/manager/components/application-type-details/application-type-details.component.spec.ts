import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationTypeDetailsComponent } from './application-type-details.component';

describe('ApplicationTypeDetailsComponent', () => {
  let component: ApplicationTypeDetailsComponent;
  let fixture: ComponentFixture<ApplicationTypeDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationTypeDetailsComponent]
    });
    fixture = TestBed.createComponent(ApplicationTypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
