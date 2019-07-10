import { Injectable } from '@angular/core';
import { FormControlName, FormGroup, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class QnsService {

  constructor( private firestore: AngularFirestore) { }

  form = new FormGroup({
          qn: new FormControl(''),
          opnA: new FormControl(''),
          opnB: new FormControl(''),
          opnC: new FormControl(''),
          opnD: new FormControl(''),
          ans: new FormControl('')
  });
}
