import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuiztailorComponent } from './quiztailor/quiztailor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { QuizareaComponent } from './quizarea/quizarea.component';

import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: QuiztailorComponent },
  { path: 'quiz', component: QuizareaComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    QuiztailorComponent,
    QuizareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
