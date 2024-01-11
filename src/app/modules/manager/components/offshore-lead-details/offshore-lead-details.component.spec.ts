import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffshoreLeadDetailsComponent } from './offshore-lead-details.component';

describe('OffshoreLeadDetailsComponent', () => {
  let component: OffshoreLeadDetailsComponent;
  let fixture: ComponentFixture<OffshoreLeadDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffshoreLeadDetailsComponent]
    });
    fixture = TestBed.createComponent(OffshoreLeadDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
