import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryTechnologyDetailsComponent } from './primary-technology-details.component';

describe('PrimaryTechnologyDetailsComponent', () => {
  let component: PrimaryTechnologyDetailsComponent;
  let fixture: ComponentFixture<PrimaryTechnologyDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimaryTechnologyDetailsComponent]
    });
    fixture = TestBed.createComponent(PrimaryTechnologyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
