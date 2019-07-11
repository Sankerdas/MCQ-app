import { Component, OnInit } from '@angular/core';
import { QnsService } from '../shared/qns.service';

@Component({
  selector: 'app-add-qns',
  templateUrl: './add-qns.component.html',
  styleUrls: ['./add-qns.component.css']
})
export class AddQnsComponent implements OnInit {

  onSubmit() {
    let data = this.qnsService.form.value; // get form values
    this.qnsService.addQns(data).then(res => {
      console.log('Form Submitted!');
      this.qnsService.form.reset();
    });
  }

  constructor( private qnsService: QnsService ) { }

  ngOnInit() {
  }

}
