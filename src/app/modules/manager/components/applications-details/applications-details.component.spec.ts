import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsDetailsComponent } from './applications-details.component';

describe('ApplicationsDetailsComponent', () => {
  let component: ApplicationsDetailsComponent;
  let fixture: ComponentFixture<ApplicationsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationsDetailsComponent]
    });
    fixture = TestBed.createComponent(ApplicationsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
