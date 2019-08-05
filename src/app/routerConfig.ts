
import { Routes } from '@angular/router';

import { QuizMainComponent } from './quiz-main/quiz-main.component';
import { HomeComponent } from './home/home.component';
import { DashComponent } from './dash/dash.component';
import { AppComponent } from './app.component';


export const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'quiz',
        component: QuizMainComponent
    },
    {
      path: 'dash',
      component: DashComponent
    }

];

