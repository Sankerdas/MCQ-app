import { Component, OnInit } from '@angular/core';
import { QnsService } from '../shared/qns.service';

@Component({
  selector: 'app-list-qns',
  templateUrl: './list-qns.component.html',
  styleUrls: ['./list-qns.component.css']
})
export class ListQnsComponent implements OnInit {

  constructor( private qnsService: QnsService) { }

  qnsList: any;

  getQnsList = () => { // subsribe to get value
  this.qnsService.getQns().subscribe( res => (this.qnsList = res) );
  }

  deleteQnRow = (data) => {
    this.qnsService.deleteQn(data);
    console.log('Deleted from firebase');
  }

  ngOnInit() { this.getQnsList(); }

}
