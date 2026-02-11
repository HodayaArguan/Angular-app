import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLesson1Component } from './new-lesson1.component';

describe('NewLesson1Component', () => {
  let component: NewLesson1Component;
  let fixture: ComponentFixture<NewLesson1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewLesson1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewLesson1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
