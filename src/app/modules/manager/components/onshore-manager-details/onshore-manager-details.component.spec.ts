import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnshoreManagerDetailsComponent } from './onshore-manager-details.component';

describe('OnshoreManagerDetailsComponent', () => {
  let component: OnshoreManagerDetailsComponent;
  let fixture: ComponentFixture<OnshoreManagerDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnshoreManagerDetailsComponent]
    });
    fixture = TestBed.createComponent(OnshoreManagerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
