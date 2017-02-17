import { RouterModule, Routes } from '@angular/router';

import { AuthenticationGuard } from './services/auth.guard';

import { HomeComponent } from './home/containers/home.component';
import { LoginComponent } from './login/containers/login.component';
import { DashboardComponent } from './dashboard/containers/dashboard.component';
import { NotFoundComponent } from './not-found/+not-found/not-found.component';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent
  },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [AuthenticationGuard],
  },
  { 
    path: 'login', 
    component: LoginComponent,
    data: { title: 'Login' } 
  },
  { 
      path: '**', 
      component: NotFoundComponent 
  }
];
