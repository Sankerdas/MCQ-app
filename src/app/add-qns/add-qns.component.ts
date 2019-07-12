import { Component, OnInit } from '@angular/core';
import { QnsService } from '../shared/qns.service';

@Component({
  selector: 'app-add-qns',
  templateUrl: './add-qns.component.html',
  styleUrls: ['./add-qns.component.css']
})
export class AddQnsComponent implements OnInit {

  onSubmit() {
<<<<<<< HEAD
    const data: any = this.qnsService.form.value; // get form values
    this.qnsService.addQns(data).then(res => {    });
=======
    const data = this.qnsService.form.value;
    this.qnsService.insQns(data);
>>>>>>> 3c9e13d9c846d28b5649202a93de956847856d18
  }

  constructor( private qnsService: QnsService ) { }

  ngOnInit() {
  }

}
