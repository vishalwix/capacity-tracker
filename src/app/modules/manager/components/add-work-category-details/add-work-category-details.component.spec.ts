import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkCategoryDetailsComponent } from './add-work-category-details.component';

describe('AddWorkCategoryDetailsComponent', () => {
  let component: AddWorkCategoryDetailsComponent;
  let fixture: ComponentFixture<AddWorkCategoryDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddWorkCategoryDetailsComponent]
    });
    fixture = TestBed.createComponent(AddWorkCategoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
