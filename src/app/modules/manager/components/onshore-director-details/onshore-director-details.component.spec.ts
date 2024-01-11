import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnshoreDirectorDetailsComponent } from './onshore-director-details.component';

describe('OnshoreDirectorDetailsComponent', () => {
  let component: OnshoreDirectorDetailsComponent;
  let fixture: ComponentFixture<OnshoreDirectorDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnshoreDirectorDetailsComponent]
    });
    fixture = TestBed.createComponent(OnshoreDirectorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
