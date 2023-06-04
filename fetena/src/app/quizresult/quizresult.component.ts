import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-quizresult',
  templateUrl: './quizresult.component.html',
  styleUrls: ['./quizresult.component.css']
})
export class QuizresultComponent implements OnInit{

  public result : any;
  public outOff : any;

  constructor(private route: ActivatedRoute,
    private router:Router
    ) { }

  redirectBack(){
    this.router.navigate(['/']);
  }
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.result = params['result'];
      this.outOff = params['outOff'];
    });
  }
  
}
