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
      question: 'Heeft u bomen op de weg zien liggen?',
      questionType: 'statement'
    },{
      id: 1026655799286923264,
      question: 'Kunt u uw woning nog uit?',
      questionType: 'statement'
    },{
      id: 1026674423292669957,
      question: 'Hoe lang is de storm al voor u bezig?',
      questionType: 'text'
    }];
  }

  getQuestions() {
    this.amountOfQuestions = this.questions.length;
    return this.questions;
  }

}
