import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsGroupDetailsComponent } from './applications-group-details.component';

describe('ApplicationsGroupDetailsComponent', () => {
  let component: ApplicationsGroupDetailsComponent;
  let fixture: ComponentFixture<ApplicationsGroupDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationsGroupDetailsComponent]
    });
    fixture = TestBed.createComponent(ApplicationsGroupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
