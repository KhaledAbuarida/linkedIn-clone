import { Injectable, Inject } from '@angular/core';
import { DocumentReference, Firestore, addDoc, collection, collectionData, doc, updateDoc,getDocs,query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { user } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(
    private firestore : Firestore ) { }

  getUsers() : Observable<user[]> {
    const userCollection = collection(this.firestore,'user');
    const user = collectionData(userCollection,{idField:'id'});
    return user as Observable<user[]>;
  }

  addUser(user:user) {
    const userCollection = collection(this.firestore,'user');
    addDoc(userCollection,{
     ...user
    });
  }
  
  //TODO: fix this functionality
  updateUser(user1: user) {
    const userCollection = collection(this.firestore, 'user');
    const userRef: DocumentReference<user> = doc(userCollection, user1.id);
    updateDoc(userRef, {
     ...user1
     });
  }

  async finduser(email:string,password:string){
    const userCollection = collection(this.firestore, 'user');
    const querySnapshot = await getDocs(query(userCollection, where('email', '==', email), where('password', '==', password)));
    if (!querySnapshot.empty) {
      // User found, return user data
      const userData = querySnapshot.docs[0].data();

      return userData;
  } else {
      // No user found with the provided email and password
      return null;
  }
  }
  
 
}