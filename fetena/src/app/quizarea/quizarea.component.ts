import { Component } from '@angular/core';
import { QuizapiService } from '../quizapi.service';

@Component({
  selector: 'app-quizarea',
  templateUrl: './quizarea.component.html',
  styleUrls: ['./quizarea.component.css']
})
export class QuizareaComponent {
  public questions: any;
  public questionsNumber:any;
  public doneQuestions:any = 0;
  public pro:any = "0%";
  public progress:any = 0;
  public visited = new Set();

  constructor(private quizService:QuizapiService){
    this.questions = this.quizService.questions;
    this.questionsNumber =  this.questions.length;
  }

  incrementDone(i:number){

     let found :boolean = false;
    this.visited.forEach (function(value) {
      if(value == i){
        found = true;
        
      }
    })
    if(!found){
      this.doneQuestions++;
      this.progress = (this.doneQuestions/this.questionsNumber);
      this.pro= String(this.progress*100) + "%";
      this.visited.add(i);
    }

  }
  

}
