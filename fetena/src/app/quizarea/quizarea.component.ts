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
  public progress:any = 0;
  public visited = new Set();
  public temp:any;
  public enableButton:boolean = true;


  constructor(private quizService:QuizapiService,
    private router:Router
    ){
  }


incrementDone(i:number, answer: any){

    let found :boolean = false;

    this.visited.forEach (function(value) {
      if(value == i)  found = true;       });

    this.answersGiven[i] = answer;
    let count = 0;

    this.answersGiven.forEach((value:any)=>{
    if(value != null)  count ++; });

    if (count == this.answersGiven.length) this.enableButton = false;

    if(!found){
      this.doneQuestions++;
      this.progress = String((this.doneQuestions/this.questionsNumber)*100) + "%";
      this.visited.add(i);
    }

    

  }


  correct(){
    let res = 0;
    for(let i = 0; i < this.questionsNumber; i++){
      if (this.answersGiven[i] == this.answersKey[i]) res ++;
    }
    return res
  }

  results(){
    let result = this.correct();
    let outOff = this.questionsNumber ;
    this.router.navigate(['/result'], { queryParams: { result , outOff } });
  }



  ngOnInit(): void {
    this.temp = sessionStorage.getItem('quizQuestions');
    if (this.temp){

      this.questions = JSON.parse(this.temp);
      this.questionsNumber =  this.questions.length;
      this.answersGiven  = new Array(this.questionsNumber);
      this.answersKey  = new Array(this.questionsNumber);

      for(let i = 0; i < this.questionsNumber; i++){
       let j = 1;
       for (const value in  (this.questions[i].correct_answers)){
          if ((this.questions[i].correct_answers)[value] == 'true'){
            this.answersKey[i] = String.fromCharCode(96 + j);}
          j++;
        };}

    }else this.router.navigate(['quiz']);

  }

}
