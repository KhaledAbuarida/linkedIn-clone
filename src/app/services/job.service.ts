import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { Job } from '../model/job';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private firestore: Firestore) {}

  getJobs(): Observable<Job[]> {
    const jobCollection = collection(this.firestore, 'jobs');
    const job = collectionData(jobCollection, { idField: 'id' });
    return job as Observable<Job[]>;
  }

  addJob(job: Job) {
    const jobCollection = collection(this.firestore, 'jobs');
    addDoc(jobCollection, {
      ...job,
    });
  }

  async deleteJob(jobId: string): Promise<void> {
    try {
      const jobDocRef = doc(this.firestore, 'jobs', jobId);
      await deleteDoc(jobDocRef);
      console.log(`Job with ID ${jobId} deleted successfully.`);
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  }

  getCompanyJobs(companyName: string): Observable<Job[]> {
    const jobCollection = collection(this.firestore, 'jobs');
    const q = query(jobCollection, where('company.company_name', '==', companyName));
    const jobs = collectionData(q, { idField: 'id' });
    return jobs as Observable<Job[]>;
  }

  // async getCompanyJobs(companyName: string): Observable<Job[]> {
  //   const jobCollection = collection(this.firestore, 'jobs');
  //   const querySnapshot = await getDocs(
  //     query(jobCollection, where('company_name', '==', companyName))
  //   );

  //   if (querySnapshot.empty) {
  //     return null
  //   }
  //   else {

  //     const job = collectionData(jobCollection, { idField: 'id' });
  //     return job as Observable<Job[]>;
  //   }
  // }
}
