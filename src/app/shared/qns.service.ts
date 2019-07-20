import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class QnsService {

  constructor( private firestore: AngularFirestore, private formbuilder: FormBuilder) {
   }

  // this is like db schema
  form: FormGroup = this.formbuilder.group({
    qn: '',
    opnA: '',
    opnB: '',
    opnC: '',
    opnD: '',
    ans: ''
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
