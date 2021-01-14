import { Routes } from '@angular/router'; 
import { PatientLandingComponent } from "./patient-landing/patient-landing.component";

export const LandingRoutes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: PatientLandingComponent, 
    }]
  }
];