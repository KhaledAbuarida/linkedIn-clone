import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"linked-out-3d27a","appId":"1:176149281860:web:6be0060f3306c7f2679011","storageBucket":"linked-out-3d27a.appspot.com","apiKey":"AIzaSyD1JKL_1dIEldxkMK0iHbQA5wfLGFuhhnE","authDomain":"linked-out-3d27a.firebaseapp.com","messagingSenderId":"176149281860"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
