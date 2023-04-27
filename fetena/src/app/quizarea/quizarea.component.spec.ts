import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizareaComponent } from './quizarea.component';

describe('QuizareaComponent', () => {
  let component: QuizareaComponent;
  let fixture: ComponentFixture<QuizareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
