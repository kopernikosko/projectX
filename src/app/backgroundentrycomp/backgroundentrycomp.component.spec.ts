import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundentrycompComponent } from './backgroundentrycomp.component';

describe('BackgroundentrycompComponent', () => {
  let component: BackgroundentrycompComponent;
  let fixture: ComponentFixture<BackgroundentrycompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BackgroundentrycompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackgroundentrycompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
