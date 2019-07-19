import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddQnsComponent } from './add-qns/add-qns.component';
import { ListQnsComponent } from './list-qns/list-qns.component';
import { QnsService } from './shared/qns.service';
import { ReactiveFormsModule } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { RouterModule } from '@angular/router';
import { QuizMainComponent } from './quiz-main/quiz-main.component';
import { HomeComponent } from './home/home.component';

import appRoutes from './routerConfig';

@NgModule({
  declarations: [
    AppComponent,
    AddQnsComponent,
    ListQnsComponent,
    QuizMainComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [QnsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
