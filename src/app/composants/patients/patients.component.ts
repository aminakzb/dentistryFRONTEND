import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/modules/patient';
import { PatientService } from 'src/app/services/patient.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent {
  
  constructor(private router: Router, private patientService: PatientService) { }

  showAddForm: boolean = false;
  toggleAddForm() {
    this.showAddForm = !this.showAddForm; 

  }
}

