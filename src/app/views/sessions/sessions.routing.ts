 
import { Routes } from "@angular/router";

import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { LockscreenComponent } from "./lockscreen/lockscreen.component";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ErrorComponent } from "./error/error.component"; 
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { PatientConsentComponent } from "./consent-form/patient-consent/patient-consent.component";
import { ConsentSignedComponent } from "./consent-form/consent-signed/consent-signed.component";
import { MiniSurveyComponent } from "./mini-survey/mini-survey.component";

export const SessionsRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "signup",
        component: SignupComponent,
        data: { title: "Signup" }
      },
      {
        path: "signin",
        component: SigninComponent,
        data: { title: "Signin" }
      },
      {
        path: "forgot-password",
        component: ForgotPasswordComponent,
        data: { title: "Forgot password" }
      },
      {
        path: "reset-password",
        component: ResetPasswordComponent,
        data: { title: "Reset password" }
      },
      {
        path: "lockscreen",
        component: LockscreenComponent,
        data: { title: "Lockscreen" }
      },
      {
        path: "404",
        component: NotFoundComponent,
        data: { title: "Not Found" }
      },
      {
        path: "error",
        component: ErrorComponent,
        data: { title: "Error" }
      },
      {
        path: "patient-consent",
        component: PatientConsentComponent,
        data: { title: "Patient Consent" }
      },
      {
        path: "consent-form-signed",
        component: ConsentSignedComponent,
        data: { title: "Consent Form Signed" }
      },
      {
        path: "mini-survey",
        component: MiniSurveyComponent,
        data: { title: "Mini Survey " }
      }
    ]
  }
];
