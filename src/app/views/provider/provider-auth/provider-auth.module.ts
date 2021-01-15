import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs'; 
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ChartsModule } from 'ng2-charts';
import { FileUploadModule } from 'ng2-file-upload';
import { SharedModule } from './../../../shared/shared.module'; 
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { FlexLayoutModule } from '@angular/flex-layout';  
import { MatCarouselModule } from 'ng-mat-carousel'; 
import { ProviderAuthRoutes } from './provider-auth.routing'; 
import { ProviderAuthHeaderComponent } from './provider-auth-header/provider-auth-header.component';
import { SelectProviderComponent } from "./select-provider/select-provider.component";
import { SharedMaterialModule } from 'app/shared/shared-material.module';
import { ProviderIdentificationNumberComponent } from './provider-identification-number/provider-identification-number.component';

@NgModule({
  imports: [     
    CommonModule,
    FormsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatChipsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTabsModule,
    MatInputModule,
    MatProgressBarModule,
    FlexLayoutModule,
    NgxDatatableModule,
    ChartsModule,
    FileUploadModule,
    SharedModule,
    MatExpansionModule,
    MatTableModule,
    MatCarouselModule.forRoot(),
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    SharedMaterialModule,
    FlexLayoutModule,   
    MatRadioModule,
    RouterModule.forChild(ProviderAuthRoutes)

   
  ],
  declarations: [ 
    ProviderAuthHeaderComponent,
    SelectProviderComponent,
    ProviderIdentificationNumberComponent
  ]
})
export class ProviderAuthModule { }
