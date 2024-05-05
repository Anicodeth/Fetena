import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class QuizapiService {

  public questions : any ;
  constructor(private http:HttpClient, private router: Router, private route: ActivatedRoute) { }

  generateQuiz(params:any){

        params['apiKey'] = '2t0zYFmvHIYtdS8Qq5ZnWNxhkUxdjjbMemA66qFl';
        this.http.get(`https://quizapi.io/api/v1/questions`, {params:params}).subscribe((data)=>{
          this.questions = data;
          sessionStorage.setItem('quizQuestions', JSON.stringify(this.questions));
          this.router.navigate(['quiz'], { relativeTo: this.route });

    });
  }
}
