import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwocompComponent } from './wwocomp.component';

describe('WwocompComponent', () => {
  let component: WwocompComponent;
  let fixture: ComponentFixture<WwocompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WwocompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WwocompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
