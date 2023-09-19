import { Injectable } from '@angular/core';
import { Patient } from '../modules/patient';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiUrl = 'http://localhost:8080/patients';
  
  constructor(private http: HttpClient) { }

  addPatient(patient: Patient)  {
    return this.http.post(this.apiUrl, patient);
  }
}