export class DossierMedical{
    idDossierMedical!:number;
    numPatient!:number;
    dentsTraitees!:number;
    dentsAbsentes!:number;
    dentsRestantesATraiter!:number;
    carries!:number;
    etatGeneralPatient!:string;
    habitudeVie!:string;
    histoireMaladie!:string;
    precautions!:string;
    radios!:Blob | null;
}