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
        path: "landing",
        loadChildren: () =>
          import("./views/landing/landing.module").then((m) => m.LandingModule), 
      },
    ],
  },

  
  {
    path: "",
    redirectTo: "others/blank",
    pathMatch: "full",
  },
  {
    path: "home",
    loadChildren: () =>
      import("./views/home/home.module").then((m) => m.HomeModule),
    data: { title: "Choose A Demo" },
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
