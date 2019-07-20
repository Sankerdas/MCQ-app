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

  getQuizQns = () => {
    this.qnsService.getQns().subscribe(res => (this.qzQns = res));
  }

  ngOnInit() {
    this.getQuizQns();
  }

}
