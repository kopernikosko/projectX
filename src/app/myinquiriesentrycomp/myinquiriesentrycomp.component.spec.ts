import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyinquiriesentrycompComponent } from './myinquiriesentrycomp.component';

describe('MyinquiriesentrycompComponent', () => {
  let component: MyinquiriesentrycompComponent;
  let fixture: ComponentFixture<MyinquiriesentrycompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyinquiriesentrycompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyinquiriesentrycompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
