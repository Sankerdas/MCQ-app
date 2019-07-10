import { Component, OnInit } from '@angular/core';
import { QnsService } from '../shared/qns.service';

@Component({
  selector: 'app-add-qns',
  templateUrl: './add-qns.component.html',
  styleUrls: ['./add-qns.component.css']
})
export class AddQnsComponent implements OnInit {

  onSubmit() {
    alert('im ready');
  }

  constructor( private qnsService: QnsService ) { }

  ngOnInit() {
  }

}
