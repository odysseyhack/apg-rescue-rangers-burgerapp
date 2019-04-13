import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerTypeComponent } from './answer-type.component';

describe('AnswerTypeComponent', () => {
  let component: AnswerTypeComponent;
  let fixture: ComponentFixture<AnswerTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
