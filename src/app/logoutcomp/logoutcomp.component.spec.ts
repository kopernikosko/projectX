import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutcompComponent } from './logoutcomp.component';

describe('LogoutcompComponent', () => {
  let component: LogoutcompComponent;
  let fixture: ComponentFixture<LogoutcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogoutcompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoutcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
