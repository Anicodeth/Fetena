import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { QuizapiService } from '../quizapi.service';

@Component({
  selector: 'app-quiztailor',
  templateUrl: './quiztailor.component.html',
  styleUrls: ['./quiztailor.component.css']
})
export class QuiztailorComponent {

constructor(private router:Router, 
  private quiz:QuizapiService
  ){}

quizTailor = new FormGroup({
  category: new FormControl(''),
  limit: new FormControl(''),
  difficulty: new FormControl(''),
}
)

getQuiz(){
  this.quiz.generateQuiz(this.quizTailor.value);
}

}
