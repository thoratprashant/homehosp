import { Routes } from '@angular/router';  
import { OfficeInfoComponent } from './office-info/office-info.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ProfessionalInfoComponent } from './professional-info/professional-info.component'; 
import { ProviderAuthComponent } from './provider-auth.component';
import { ProviderCredentialsComponent } from './provider-credentials/provider-credentials.component';
import { ProviderIdentificationNumberComponent } from './provider-identification-number/provider-identification-number.component';
import { SelectProviderComponent } from "./select-provider/select-provider.component";
import { ThankyouComponent } from './thankyou/thankyou.component';

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
      {
        path: 'office-info',
        component: OfficeInfoComponent, 
        data: { title: 'Office Info'}
      },
      {
        path: 'credentials',
        component: ProviderCredentialsComponent, 
        data: { title: 'Credentials'}
      },
      {
        path: 'professional-info',
        component: ProfessionalInfoComponent, 
        data: { title: 'Professional Info'}
      },
      {
        path: 'thank-you',
        component: ThankyouComponent, 
        data: { title: 'Thank you'}
      },
  ]
  }
];
 