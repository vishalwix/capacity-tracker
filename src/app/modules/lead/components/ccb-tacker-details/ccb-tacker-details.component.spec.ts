import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcbTackerDetailsComponent } from './ccb-tacker-details.component';

describe('CcbTackerDetailsComponent', () => {
  let component: CcbTackerDetailsComponent;
  let fixture: ComponentFixture<CcbTackerDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CcbTackerDetailsComponent]
    });
    fixture = TestBed.createComponent(CcbTackerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
