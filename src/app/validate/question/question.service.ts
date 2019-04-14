import { Injectable, EventEmitter } from '@angular/core';

import { Question } from './question.model';

@Injectable()
export class QuestionService {
    questions: Question[];
    amountOfQuestions: number;
    currentQuestion = new EventEmitter<number>();

  constructor() {
    this.questions = [{
      id: 1026684904749387776,
      question: 'Heeft u een raar geluid waargenomen?',
      questionType: 'statement'
    },{
      id: 1026655799286923264,
      question: 'Ruikt u een vreemde geur? zo ja, wat ruikt u?',
      questionType: 'text'
    },{
      id: 1026674423292669957,
      question: 'Ruikt u een vreemde geur? zo ja, wat ruikt u?',
      questionType: 'text'
    }];
  }

  getQuestions() {
    this.amountOfQuestions = this.questions.length;
    return this.questions;
  }

}
