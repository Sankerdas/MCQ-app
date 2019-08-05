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
  rslt: any;
  second = 0; minute = 0;
  tRun = true;
  qzShow = false;

  getQuizQns = () => {
    this.qnsService.getQns().subscribe(res => (this.qzQns = res));
  }

  qzStart = () => {
    this.qzShow = true;
    this.callTime();
  }

  qzCkeck = (data, opn) => {
    if (data.ans === opn ) {
      this.C++;
      console.log('Correct ' + this.C);
    } else {
      this.W++;
      console.log('Wrong ' + this.W);
    }
  }

  qzResult = () => {
    this.rslt = ' Correct Answer(s) ' + this.C + ' Wrong Answer(s) ' + this.W;
    this.tRun = false;
  }

  add = () => {
    if (this.tRun) {
    this.second++;
    if (this.second > 60 ) {
      this.minute++;
      this.second = 0;
      }
    this.callTime();
  }
  }

  callTime = () => {
    setTimeout(() => { this.add(); }, 1000);
  }

  ngOnInit() {
    this.getQuizQns();
  }


}
