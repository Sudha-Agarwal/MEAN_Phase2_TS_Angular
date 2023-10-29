import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { DataService } from './data.service';
import { Quiz } from './quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private quiz: Quiz[];

  //private quiz1: Quiz[];
  private currentQuestionIndex: number;
  private numberOfCorrectAnswers: number;
  $question:Observable<Quiz[]>;

constructor(private ds:DataService) {
  
 /* this.quiz = [
    
      {
        question: 'What is the capital of France?',
        choices: ['London', 'Paris', 'New York', 'Tokyo'],
        answerIndex: 1
      },
      {
        question: 'What is the largest planet in our solar system?',
        choices: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
        answerIndex: 1
      },
      {
        question: 'What is the currency of Japan?',
        choices: ['Dollar', 'Yen', 'Euro', 'Pound'],
        answerIndex: 1
      },
      {
        question: 'What is the tallest mammal?',
        choices: ['Giraffe', 'Elephant', 'Hippopotamus', 'Rhino'],
        answerIndex: 0
      },
      {
        question: 'What is the smallest country in the world?',
        choices: ['Monaco', 'Nauru', 'Tuvalu', 'Vatican City'],
        answerIndex: 3
      }
    ]; */
    this.$question = this.ds.getQuestionsFromServer();
    this.currentQuestionIndex = 0;
    this.numberOfCorrectAnswers = 0;

    this.ds.getQuestionsFromServer().subscribe(
      data=> this.quiz = data
    )
   
}



getQuestions():Observable<Quiz[]>{ 
  this.currentQuestionIndex = 0;
    this.numberOfCorrectAnswers = 0;
  //console.log(this.$question);
  return this.$question;  

  /*this.ds.getQuestionsFromServer().subscribe({
    next: res => {
      this.quiz  = res;
      this.currentQuestionIndex = 0;
  this.numberOfCorrectAnswers = 0;
  console.log("from service: " + this.quiz);
  return of(this.quiz);},

    error: err=>console.log(err),
    complete: ()=>console.log('complete')
  });
  alert(this.quiz);
  return of(this.quiz);
  */
}


getCurrentQuestion(): Quiz {
  console.log(this.quiz[this.currentQuestionIndex]);
  return this.quiz[this.currentQuestionIndex];
}

getNumberOfCorrectAnswers(): number {
  return this.numberOfCorrectAnswers;
}

getNumberOfQuestions(): number {
  return this.quiz.length;
}

isCorrectAnswer(answer: number): boolean {

  const currentQuestion = this.getCurrentQuestion();

  const isCorrect = currentQuestion.answerIndex === answer;

  if (isCorrect) {
    this.numberOfCorrectAnswers++;
  }
  return isCorrect;
}

goToNextQuestion(): Quiz {
  alert(this.quiz.length);
  if (this.currentQuestionIndex < this.quiz.length - 1) {
    this.currentQuestionIndex++;
    return this.getCurrentQuestion();
  }
  else{
    return this.quiz[0];
  }
  //alert(this.currentQuestionIndex)
}

resetQuiz(): void {
  this.currentQuestionIndex = 0;
  this.numberOfCorrectAnswers = 0;
}
}
