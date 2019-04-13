import { Injectable, EventEmitter } from '@angular/core';

import { Question } from './question.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class QuestionService {
    questions: Question[];
    amountOfQuestions: number;
    currentQuestion = new EventEmitter<number>();

  constructor() {
    this.questions = [{
      question: 'Heeft u een raar geluid waargenomen?',
      questionType: 'statement'
    },{
      question: 'Wat voor geur ruikt u?',
      questionType: 'text'
    }];
  }

  getQuestions() {
    this.amountOfQuestions = this.questions.length;
    return this.questions;
    // API Request
  }

}
