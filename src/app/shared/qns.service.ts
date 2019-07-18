import { Injectable } from '@angular/core';
import { FormControlName, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { formatNumber } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class QnsService {

  constructor( private firestore: AngularFirestore, private formbuilder: FormBuilder) {
   }


  // form = new FormGroup({
  //         qn: new FormControl(''),
  //         opnA: new FormControl(''),
  //         opnB: new FormControl(''),
  //         opnC: new FormControl(''),
  //         opnD: new FormControl(''),
  //         ans: new FormControl('')
  // });

  // this is like db schema
  form: FormGroup = this.formbuilder.group({
    qn: ['', Validators.required],
    data: this.formbuilder.group({
    opnA: '',
    opnB: '',
    opnC: '',
    opnD: '',
    ans: '' })
  });


  // insert
  insQns(data) { // promise funtion - this is triggerd after some function
    return new Promise<any>(( resolve, reject) => {
      this.firestore.collection('qns').add(data).then( res => {
        console.log('inserted to firebase ' + data.qn );
        this.form.reset();
      }, err => reject(err) );
    });
  }

  getQns() { // observable
    return this.firestore.collection('qns').snapshotChanges();
  }

  deleteQn(data) {
    this.firestore.collection('qns').doc(data.payload.doc.id).delete();
    console.log('Deleted from firebasezzzz');
  }

}
