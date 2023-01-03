import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenscreenComponent } from './openscreen.component';

describe('OpenscreenComponent', () => {
  let component: OpenscreenComponent;
  let fixture: ComponentFixture<OpenscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenscreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
