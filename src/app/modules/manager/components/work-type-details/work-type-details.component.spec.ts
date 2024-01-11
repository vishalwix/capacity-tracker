import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTypeDetailsComponent } from './work-type-details.component';

describe('WorkTypeDetailsComponent', () => {
  let component: WorkTypeDetailsComponent;
  let fixture: ComponentFixture<WorkTypeDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkTypeDetailsComponent]
    });
    fixture = TestBed.createComponent(WorkTypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
