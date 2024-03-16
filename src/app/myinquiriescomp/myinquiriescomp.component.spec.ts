import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyinquiriescompComponent } from './myinquiriescomp.component';

describe('MyinquiriescompComponent', () => {
  let component: MyinquiriescompComponent;
  let fixture: ComponentFixture<MyinquiriescompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyinquiriescompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyinquiriescompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
