import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from '../question.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() currentQuestion: number;
  questionsLength: Question[];

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questionsLength = this.questionService.getQuestions();
  }

}
