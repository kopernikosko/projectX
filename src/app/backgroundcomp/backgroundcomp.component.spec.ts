import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundcompComponent } from './backgroundcomp.component';

describe('BackgroundcompComponent', () => {
  let component: BackgroundcompComponent;
  let fixture: ComponentFixture<BackgroundcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BackgroundcompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackgroundcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
