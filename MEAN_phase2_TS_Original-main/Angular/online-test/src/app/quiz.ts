export class Quiz {
    question: string;
    choices: string[];
    answerIndex: number;
  
    constructor(question: string, choices: string[], answerIndex: number) {
      this.question = question;
      this.choices = choices;
      this.answerIndex = answerIndex;
    }
  }
  