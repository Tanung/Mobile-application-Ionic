import { Injectable } from '@angular/core';
import { News } from './News';
import 'firebase/firestore';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  userList: AngularFireList<any>;
  userRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase, private ngFirestore: AngularFirestore) { }

  // Create
  createUser(user: any) {
    return this.ngFirestore.collection('news').add(user);
  }

  getData() {
    return this.ngFirestore.collection('news').snapshotChanges();
  }

  // Update
  updateUser(id, updatedata: any) {
    return this.ngFirestore.doc('news/'+id).update(updatedata);
  }

  // Delete
  deleteUser(delid) {
    return this.ngFirestore.doc('news/'+delid).delete();
  }
}
