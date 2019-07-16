import { Injectable } from '@angular/core';
import { FormControlName, FormGroup, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class QnsService {

  constructor( private firestore: AngularFirestore) {
   }


  form = new FormGroup({
          qn: new FormControl(''),
          opnA: new FormControl(''),
          opnB: new FormControl(''),
          opnC: new FormControl(''),
          opnD: new FormControl(''),
          ans: new FormControl('')
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
