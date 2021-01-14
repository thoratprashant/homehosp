import { Routes } from '@angular/router';  
import { ProLandingComponent } from "./pro-landing/pro-landing.component";

export const ProviderLandingRoutes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: ProLandingComponent, 
    }]
  }
];