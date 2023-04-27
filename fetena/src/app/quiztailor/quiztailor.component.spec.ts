import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiztailorComponent } from './quiztailor.component';

describe('QuiztailorComponent', () => {
  let component: QuiztailorComponent;
  let fixture: ComponentFixture<QuiztailorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuiztailorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuiztailorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
