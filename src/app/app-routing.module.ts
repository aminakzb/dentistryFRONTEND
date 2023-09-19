import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './composants/login/login.component';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { RendezVousComponent } from './composants/rendez-vous/rendez-vous.component';
import { PatientsComponent } from './composants/patients/patients.component';
import { AjoutPatientComponent } from './composants/ajout-patient/ajout-patient.component';


const routes: Routes = [
  { path: '',  component: LoginComponent},
    { path: 'Dentiste',  component: LoginComponent},
    { path: 'Dentiste/login',  component: LoginComponent},
    { path: 'accueil',  component: AccueilComponent},
    { path: 'Rendez-vous', component: RendezVousComponent},
    { path: 'patients', component: PatientsComponent},
    { path: 'patients/add', component: AjoutPatientComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }