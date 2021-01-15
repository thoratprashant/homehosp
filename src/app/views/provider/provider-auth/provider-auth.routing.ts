import { Routes } from '@angular/router';  
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ProviderAuthHeaderComponent } from './provider-auth-header/provider-auth-header.component';
import { ProviderAuthComponent } from './provider-auth.component';
import { ProviderIdentificationNumberComponent } from './provider-identification-number/provider-identification-number.component';
import { SelectProviderComponent } from "./select-provider/select-provider.component";

export const ProviderAuthRoutes: Routes = [
  {
    path: '',
    component: ProviderAuthComponent,
    children: [{
      path: 'select-provider',
      component: SelectProviderComponent, 
      data: { title: 'Select Provider'}
      },
      {
      path: 'pin',
      component: ProviderIdentificationNumberComponent,
      data: { title: 'Provider Identification Number'} 
      },
      {
      path: 'personal-info',
      component: PersonalInfoComponent, 
      data: { title: 'Personal Info'}
      },
  ]
  }
];
 