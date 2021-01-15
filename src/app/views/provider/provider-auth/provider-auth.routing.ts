import { Routes } from '@angular/router';  
import { ProviderIdentificationNumberComponent } from './provider-identification-number/provider-identification-number.component';
import { SelectProviderComponent } from "./select-provider/select-provider.component";

export const ProviderAuthRoutes: Routes = [
  {
    path: '',
    children: [
      {
      path: 'select-provider',
      component: SelectProviderComponent, 
      },
      {
      path: 'pin',
      component: ProviderIdentificationNumberComponent, 
      },
  ]
  }
];