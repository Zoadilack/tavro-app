import { RouterModule, Routes } from '@angular/router';

import { AuthenticationGuard } from './services/auth.guard';

import { HomeComponent } from './home/+home/home.component';
import { LoginComponent } from './login/+login/login.component';
import { DashboardComponent } from './dashboard/+dashboard/dashboard.component';
import { AccountSignupComponent } from './account/+signup/account-signup.component';
import { NotFoundComponent } from './not-found/+not-found/not-found.component';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
  },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'account/signup',
    component: AccountSignupComponent,
    canActivate: [AuthenticationGuard]
  },
  { 
    path: 'login', 
    component: LoginComponent,
  },
  { 
    path: '**',
    component: NotFoundComponent,
  }
];