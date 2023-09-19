import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/modules/patient';
import { PatientService } from 'src/app/services/patient.service';
import { PatientsComponent } from '../patients/patients.component';

@Component({
  selector: 'app-ajout-patient',
  templateUrl: './ajout-patient.component.html',
  styleUrls: ['./ajout-patient.component.scss']
})
export class AjoutPatientComponent implements OnInit{


  lastAddedPatientId: number | undefined;

  nom!:string;
  prenom!:string;
  cin!:string;
  dateNaissance!:Date;
  tel!:string;
  age!:string;
  adresse!:string;
  profession!:string;
  situationFamiliale: string = 'Celibataire';
  assurance:string='';
  antecedantMedicaux!:string;
  allergie!:string;

  constructor(private patientService: PatientService,private patientComponent:PatientsComponent) { }

  ngOnInit(): void {
  }

 

  submitForm() {
    const newPatient: Patient = {
      nom: this.nom,
      prenom:this.prenom,
      cin:this.cin,
      dateNaissance:this.dateNaissance,
      tel:this.tel,
      age:this.age,
      adresse:this.adresse,
      profession:this.profession,
      situationFamiliale:this.situationFamiliale,
      assurance:this.assurance,
      antecedantMedicaux:this.antecedantMedicaux,
      allergie:this.allergie,
    
    
  }
  this.patientService.addPatient(newPatient).subscribe(
    (response) => {
      // Si l'ajout a réussi, vous pouvez afficher un message sur la console
      console.log('Patient ajouté avec succès.');

    },
    (error) => {
      // En cas d'erreur lors de l'ajout du patient, vous pouvez gérer l'erreur ici
      console.error('Erreur lors de l\'ajout du patient :', error);
    }
  );

  console.log(newPatient);
  this.patientComponent.showAddForm = false;
}
}