import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IExerciseComponent } from './i-exercise.component';

describe('IExerciseComponent', () => {
  let component: IExerciseComponent;
  let fixture: ComponentFixture<IExerciseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IExerciseComponent]
    });
    fixture = TestBed.createComponent(IExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
