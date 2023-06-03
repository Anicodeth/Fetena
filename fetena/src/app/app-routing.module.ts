import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizareaComponent } from './quizarea/quizarea.component';
import { QuizresultComponent } from './quizresult/quizresult.component';
import { QuiztailorComponent } from './quiztailor/quiztailor.component';

const routes: Routes = [
  { path: '', component: QuiztailorComponent },
  { path: 'quiz', component: QuizareaComponent },
  { path: 'result', component: QuizresultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
