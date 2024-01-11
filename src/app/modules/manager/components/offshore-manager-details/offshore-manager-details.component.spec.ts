import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffshoreManagerDetailsComponent } from './offshore-manager-details.component';

describe('OffshoreManagerDetailsComponent', () => {
  let component: OffshoreManagerDetailsComponent;
  let fixture: ComponentFixture<OffshoreManagerDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffshoreManagerDetailsComponent]
    });
    fixture = TestBed.createComponent(OffshoreManagerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
