import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuiztailorComponent } from './quiztailor/quiztailor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { QuizareaComponent } from './quizarea/quizarea.component';

import { HttpClientModule } from '@angular/common/http';
import { QuizresultComponent } from './quizresult/quizresult.component';




@NgModule({
  declarations: [
    AppComponent,
    QuiztailorComponent,
    QuizareaComponent,
    QuizresultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
