import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquirycompComponent } from './inquirycomp.component';

describe('InquirycompComponent', () => {
  let component: InquirycompComponent;
  let fixture: ComponentFixture<InquirycompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InquirycompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InquirycompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
