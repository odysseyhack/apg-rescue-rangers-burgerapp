import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';
import { Question } from './question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  providers: [QuestionService]
})
export class QuestionComponent implements OnInit {
  currentQuestion: number;
  questionData: Question[];
  questionType: string;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questionData = this.questionService.getQuestions();
    this.questionService.currentQuestion.subscribe((current) => {
      this.currentQuestion = current;
    });
  }

}
