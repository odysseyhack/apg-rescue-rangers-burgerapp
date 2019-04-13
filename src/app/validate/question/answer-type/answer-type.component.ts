import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from '../question.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-answer-type',
  templateUrl: './answer-type.component.html',
  styleUrls: ['./answer-type.component.scss']
})
export class AnswerTypeComponent implements OnInit {
  @Input() questionType: string;
  currentQuestion: number;
  questionsLength: number;
  uuid: number;
  answers = [];
  inputValue = '';

  constructor(
    private questionService: QuestionService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.questionService.currentQuestion.subscribe((current) => {
      this.currentQuestion = current;
    });
    this.questionsLength = this.questionService.amountOfQuestions - 1;
    this.questionService.currentQuestion.emit(0);
    this.activatedRoute.params.subscribe((params: Params) => {
      this.uuid = params['id'];
    });
  }

  onHandleThumbsUp() {
    this.answers.push(true);
    this.incrementCurrentQuestion();
    // Next question + save the answer
  }

  onHandleThumbsDown() {
    this.answers.push(false);
    this.incrementCurrentQuestion();
    // Next question + save the answer
  }

  onhandleButton(e) {
    this.answers.push(e.value);
    this.incrementCurrentQuestion();
  }

  getAnswerInput(e) {
    this.inputValue = e.value;
  }

  incrementCurrentQuestion() {
    if (this.currentQuestion !== this.questionsLength) {
      this.currentQuestion++;
      this.questionService.currentQuestion.emit(this.currentQuestion);
    } else {
      this.router.navigate(['/validate-feed', this.uuid]);
    }
  }

}
