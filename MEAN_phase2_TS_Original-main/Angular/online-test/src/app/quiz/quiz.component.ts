import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from '../quiz';
import { QuizService } from '../quiz.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
   questions: Quiz[];
   score: number = 0;
   currentQuestionIndex: number = 0;
  selectedChoice: number = null;
   answered: boolean = false;
   islastQuestion:boolean = false;   
   currentQuestion:Quiz;
   //choices:any[];
   isCorrect:boolean;

  constructor(private quizService: QuizService,private router: Router,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
   this.questions = [];
   this.spinner.show(); // show the loading spinner
   setTimeout(()=>{
    this.quizService.getQuestions().subscribe({
      next:res=>{
        this.questions = res;
        console.log("from quiz comp : " + this.questions);
        //console.log(this.currentQuestionIndex);
        this.currentQuestion = this.questions[this.currentQuestionIndex];
        console.log(this.currentQuestion);
        //this.choices = this.currentQuestion.choices;

        console.log("current ques: " + this.currentQuestion.choices);
      }
        ,
      error: err=>console.log(err)
    });   
   },3000);
  
       
      }
    
    
    


  /*get currentQuestion(): any {
    this.questions = [];
    this.quizService.getQuestions().subscribe(
      res => this.questions = res
    );
    return this.questions[this.currentQuestionIndex];
  }*/

  answer(choiceIndex: number): void {
    if (!this.answered) {
      this.selectedChoice = choiceIndex;
    }
  }

  checkAnswer(): void {
    alert("check answer")
    if(this.quizService.isCorrectAnswer(this.selectedChoice)){
      this.score ++;
      this.isCorrect = true;
    }
    this.answered = true;

   /* if (this.selectedChoice === this.currentQuestion.answerIndex) {
      this.score++;
    }
    this.answered = true;*/
  }

  nextQuestion(): void {    
    this.isCorrect = false;
   
    if(this.currentQuestionIndex == (this.quizService.getNumberOfQuestions()-1)){     
      alert("this is the last question"); 
      this.islastQuestion = true;
    }
    else{
      this.currentQuestionIndex++;
    this.selectedChoice = null;
    this.answered = false;
    this.currentQuestion = this.quizService.goToNextQuestion();
    }
  }

  seeResult():void{
    this.router.navigate(['/result']);
  }

}
