import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizresultComponent } from './quizresult.component';

describe('QuizresultComponent', () => {
  let component: QuizresultComponent;
  let fixture: ComponentFixture<QuizresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizresultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
