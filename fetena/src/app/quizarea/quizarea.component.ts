import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizapiService } from '../quizapi.service';

@Component({
  selector: 'app-quizarea',
  templateUrl: './quizarea.component.html',
  styleUrls: ['./quizarea.component.css']
})
export class QuizareaComponent implements OnInit {
  public questions: any;
  public questionsNumber:any;
  public doneQuestions:any = 0;
  public answersGiven:any;
  public answersKey:any;
  public pro:any = "0%";
  public progress:any = 0;
  public visited = new Set();
  public temp:any;


  constructor(private quizService:QuizapiService,
    private router:Router
    ){
  }


incrementDone(i:number){
    let found :boolean = false;
    this.visited.forEach (function(value) {
      if(value == i){
        found = true;
      }
    });


    if(!found){
      this.doneQuestions++;
      this.progress = (this.doneQuestions/this.questionsNumber);
      this.pro= String(this.progress*100) + "%";
      this.visited.add(i);
    }

    

  }


  ngOnInit(): void {
    this.temp = sessionStorage.getItem('quizQuestions');
    if (this.temp){
      this.questions = JSON.parse(this.temp);
      this.questionsNumber =  this.questions.length;
      this.answersGiven  = new Array(this.questionsNumber);
      this.answersKey  = new Array(this.questionsNumber);

      this.questions.forEach((value:any)=>{
  
      });
      console.log(this.questions);
    }else{
      this.router.navigate(['quiz']);
    }

  }
  
  

}
