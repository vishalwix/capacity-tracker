import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCategoryDetailsComponent } from './work-category-details.component';

describe('WorkCategoryDetailsComponent', () => {
  let component: WorkCategoryDetailsComponent;
  let fixture: ComponentFixture<WorkCategoryDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkCategoryDetailsComponent]
    });
    fixture = TestBed.createComponent(WorkCategoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
