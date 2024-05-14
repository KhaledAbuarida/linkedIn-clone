import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { Job } from '../model/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(
    private firestore: Firestore) { }

  getJobs(): Observable<Job[]> {
    const jobCollection = collection(this.firestore, 'jobs');
    const job = collectionData(jobCollection, { idField: 'id' });
    return job as Observable<Job[]>;
  }

  addJob(job: Job) {
    const jobCollection = collection(this.firestore, 'jobs');
    addDoc(jobCollection, {
      ...job
    });
  }
  

  



}
