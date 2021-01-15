import { Routes } from "@angular/router";
import { AdminLayoutComponent } from "./shared/components/layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./shared/components/layouts/auth-layout/auth-layout.component";
import { PatientLayoutComponent } from "./shared/components/layouts/landing-layout/patient-layout/patient-layout.component";
import { AuthGuard } from "./shared/guards/auth.guard";

export const rootRouterConfig: Routes = [
  
  {
    path: "",
    component: PatientLayoutComponent, 
    children: [
      {
        path: "patient-landing",
        loadChildren: () =>
          import("./views/landing/landing.module").then((m) => m.LandingModule), 
      },
    ],
  },

  {
    path: "",
    component: PatientLayoutComponent, 
    children: [
      {
        path: "provider-landing",
        loadChildren: () =>
          import("./views/provider-landing/provider-landing.module").then((m) => m.ProviderLandingModule), 
      },
    ],
  },
  

  
  {
    path: "",
    redirectTo: "others/blank",
    pathMatch: "full",
  },
   
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "sessions",
        loadChildren: () =>
          import("./views/sessions/sessions.module").then(
            (m) => m.SessionsModule
          ),
        data: { title: "Session" },
      },
    ],
  },

  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "provider-auth",
        loadChildren: () =>
          import("./views/provider/provider-auth/provider-auth.module").then(
            (m) => m.ProviderAuthModule
          ),
        data: { title: "Provider Auth" },
      },
    ],
  },



  {
    path: "",
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "others",
        loadChildren: () =>
          import("./views/others/others.module").then((m) => m.OthersModule),
        data: { title: "Others", breadcrumb: "OTHERS" },
      },
    ],
  },
  {
    path: "**",
    redirectTo: "sessions/404",
  },





];
