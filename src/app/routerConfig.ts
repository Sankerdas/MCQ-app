import { AppComponent } from './app.component';
import { AddQnsComponent } from './add-qns/add-qns.component';
import { ListQnsComponent } from './list-qns/list-qns.component';
import { QuizMainComponent } from './quiz-main/quiz-main.component';
import { HomeComponent } from './home/home.component';

import { Routes } from '@angular/router';
import { Component } from '@angular/core';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'quiz',
        component: QuizMainComponent
    },

];

export default appRoutes;
