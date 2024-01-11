import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkTypeDetailsComponent } from './add-work-type-details.component';

describe('AddWorkTypeDetailsComponent', () => {
  let component: AddWorkTypeDetailsComponent;
  let fixture: ComponentFixture<AddWorkTypeDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddWorkTypeDetailsComponent]
    });
    fixture = TestBed.createComponent(AddWorkTypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
