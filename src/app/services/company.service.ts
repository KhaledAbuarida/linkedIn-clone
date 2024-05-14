import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc, getDoc, getDocs, query, setDoc, where } from '@angular/fire/firestore';
import { Company } from '../model/company';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(
    private firestore: Firestore) { }
  getCompany(): Observable<Company[]> {
    const companyCollection = collection(this.firestore, 'company');
    const company = collectionData(companyCollection, { idField: 'id' });
    return company as Observable<Company[]>;
  }
  addCompany(company: Company) {
    const jobCollection = collection(this.firestore, 'company');
    addDoc(jobCollection, {
      ...company
    });
  }

  async findCompany(email: string, password: string) {
    const companyCollection = collection(this.firestore, 'company');
    const querySnapshot = await getDocs(query(companyCollection, where('email', '==', email), where('password', '==', password)));
    if (!querySnapshot.empty) {
      // User found, return user data
      const userDoc = querySnapshot.docs[0];
      const companyData = userDoc.data();
      const userId = userDoc.id;

      // Store user ID in local storage
      localStorage.setItem('userId', userId);
      

      return companyData;
    } else {
      // No user found with the provided email and password
      return null;
    }
  }

  async findCompanybyname(company_name: string) {
    const companyCollection = collection(this.firestore, 'company');
    const querySnapshot = await getDocs(query(companyCollection, where('company_name', '==', company_name)));
    if (!querySnapshot.empty) {
      // User found, return user data
      const companyData = querySnapshot.docs[0].data();

      return companyData;
    } else {
      // No user found with the provided email and password
      let company = new Company();
      company.company_name = company_name;
      this.addCompany(company);
      return company;
    }
  }
  async findCompanyById(companyId: string): Promise<Company> {
    const companyDocRef = doc(this.firestore, 'company', companyId);
    const companyDoc = await getDoc(companyDocRef);

    if (companyDoc.exists()) {
      // Company found, return company data
      const companyData = companyDoc.data() as Company;
      companyData.id = companyId;
      return companyData;
    } else {
      // No company found with the provided ID, create a new one
      const newCompany = new Company();
      newCompany.id = companyId;
      newCompany.company_name = 'New Company Name'; // You might want to set a default name or get it from somewhere

      await setDoc(companyDocRef, newCompany);
      return newCompany;
    }
  }

}
