import { Injectable, Inject } from '@angular/core';
import { DocumentReference, Firestore, addDoc, collection, collectionData, doc, updateDoc,getDocs,query, where, getDoc, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { user } from '../model/user';
import { Job } from '../model/job';

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
      // User found, get user data and ID
      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data();
      const userId = userDoc.id;

      // Store user ID in local storage
      localStorage.setItem('userId', userId);
      const userI = localStorage.getItem('userId');

// Log the user ID to the console
      console.log('User ID:', userI);
      // Return user data
      return userData;
  } else {
      // No user found with the provided email and password
      return null;
  }
  }



  async  findUserById( userId: string): Promise<any | null> {
    try {
        const userDocRef = doc(this.firestore, 'user', userId);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
            // User found, get user data
            const userData = userDoc.data();

            return userData;
        } else {
            // No user found with the provided ID
            console.log('No user found');
            return null;
        }
    } catch (error) {
        console.error('Error finding user:', error);
        return null;
    }
}

async replaceUserById(userId: string, newUserData: user): Promise<void> {
  try {
      const userDocRef = doc(this.firestore, 'user', userId);
      await setDoc(userDocRef, newUserData);

      console.log('User replaced successfully');
  } catch (error) {
      console.error('Error replacing user:', error);
  }
}


  
  async saveJob(job :Job){
    const userI = localStorage.getItem('userId');
     let user1 = await this.findUserById(userI!);
    user1.jobs_saved.push(job);
    this.replaceUserById(userI!,user1);
  }
  
  async applyJob(job :Job){
    const userI = localStorage.getItem('userId');
    job.Applicants?.push(userI!);
    const jobsCollectionRef = collection(this.firestore, 'jobs');
    const jobDocRef = doc(jobsCollectionRef, job.id);
    await setDoc(jobDocRef, job);
  }
 
}