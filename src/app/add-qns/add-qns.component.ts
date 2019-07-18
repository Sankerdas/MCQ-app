import { Component, OnInit } from '@angular/core';
import { QnsService } from '../shared/qns.service';

@Component({
  selector: 'app-add-qns',
  templateUrl: './add-qns.component.html',
  styleUrls: ['./add-qns.component.css']
})
export class AddQnsComponent implements OnInit {

  onSubmit() {
    const data = this.qnsService.form.value;
    this.qnsService.insQns(data);
  }

  constructor( private qnsService: QnsService ) { }

  ngOnInit() {
    this.qnsService.form.valueChanges.subscribe(console.log); // log the form input
  }

}
