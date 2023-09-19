import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './composants/form/form.component';
import { LoginComponent } from './composants/login/login.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { RendezVousComponent } from './composants/rendez-vous/rendez-vous.component';
import { PatientsComponent } from './composants/patients/patients.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NavbarComponent } from './composants/navbar/navbar.component';
import { SidebarComponent } from './composants/sidebar/sidebar.component';
import { AjoutPatientComponent } from './composants/ajout-patient/ajout-patient.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    LoginComponent,
    AccueilComponent,
    RendezVousComponent,
    PatientsComponent,
    NavbarComponent,
    SidebarComponent,
    AjoutPatientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    FullCalendarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
