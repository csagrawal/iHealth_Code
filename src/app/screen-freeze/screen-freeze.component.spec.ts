import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenFreezeComponent } from './screen-freeze.component';

describe('ScreenFreezeComponent', () => {
  let component: ScreenFreezeComponent;
  let fixture: ComponentFixture<ScreenFreezeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenFreezeComponent]
    });
    fixture = TestBed.createComponent(ScreenFreezeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
