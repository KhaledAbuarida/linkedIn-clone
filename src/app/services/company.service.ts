import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, getDocs, query, where } from '@angular/fire/firestore';
import { Company } from '../model/company';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(
    private firestore : Firestore ) { }
    getCompany() : Observable<Company[]> {
      const companyCollection = collection(this.firestore,'company');
      const company = collectionData(companyCollection,{idField:'id'});
      return company as Observable<Company[]>;
    }
    addCompany(company:Company) {
      const jobCollection = collection(this.firestore,'company');
      addDoc(jobCollection,{
        ...company
       });
    }
    async findCompany(email:string,password:string){
      const companyCollection = collection(this.firestore, 'company');
      const querySnapshot = await getDocs(query(companyCollection, where('email', '==', email), where('password', '==', password)));
      if (!querySnapshot.empty) {
        // User found, return user data
        const companyData = querySnapshot.docs[0].data();
  
        return companyData;
    } else {
        // No user found with the provided email and password
        return null;
    }
    }
}
