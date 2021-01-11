import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { SharedMaterialModule } from 'app/shared/shared-material.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';

// import { CommonDirectivesModule } from './sdirectives/common/common-directives.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SessionsRoutes } from "./sessions.routing";
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './error/error.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthHeaderComponent } from './auth-header/auth-header.component';
import { PatientConsentComponent } from './consent-form/patient-consent/patient-consent.component';
import { ConsentSignedComponent } from './consent-form/consent-signed/consent-signed.component'; 

@NgModule({
  imports: [
  CommonModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    FlexLayoutModule,
    PerfectScrollbarModule,
    RouterModule.forChild(SessionsRoutes)
  ],
  declarations: [
    ForgotPasswordComponent, 
    LockscreenComponent, 
    SigninComponent, 
    SignupComponent, 
    NotFoundComponent, 
    ErrorComponent, 
    ResetPasswordComponent, AuthHeaderComponent, 
    PatientConsentComponent, ConsentSignedComponent]
})
export class SessionsModule { }