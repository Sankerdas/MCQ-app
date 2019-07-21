import { Component, OnInit } from '@angular/core';
import { QnsService } from '../shared/qns.service';


@Component({
  selector: 'app-quiz-main',
  templateUrl: './quiz-main.component.html',
  styleUrls: ['./quiz-main.component.css']
})
export class QuizMainComponent implements OnInit {

  constructor(public qnsService: QnsService) { }

  qzQns: any;
  C = 0;
  W = 0;


  getQuizQns = () => {
    this.qnsService.getQns().subscribe(res => (this.qzQns = res));
  }


  qzCkeck = (data, opn, id) => {

    if (data.ans === opn ) {
      this.C++;
      console.log('Correct ' + this.C);


    } else {
      this.W++;
      console.log('Wrong ' + this.W);
    }

  }

  qzResult = () => {
    console.log('Wrong ' + this.W);
    console.log('Correct ' + this.C);
  }


  ngOnInit() {
    this.getQuizQns();
  }


}
