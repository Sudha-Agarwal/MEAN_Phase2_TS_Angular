import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  
  totalQuestions: number;
  correctAnswers: number;
  percentage: number;

  constructor(private quizService: QuizService, private router: Router) { }

  ngOnInit() {
    this.correctAnswers = 0;
    this.totalQuestions = 0;  
    this.percentage = 0

    this.totalQuestions = this.quizService.getNumberOfQuestions();
    this.correctAnswers = this.quizService.getNumberOfCorrectAnswers();
    this.percentage = Math.round(this.correctAnswers / this.totalQuestions * 100);
  }

  takeAnotherQuiz() {
    this.quizService.resetQuiz();
    this.router.navigate(['/quiz']);
  }

}
