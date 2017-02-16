import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/containers/home.component';
import { LoginComponent } from './login/containers/login.component';
import { NotFoundComponent } from './not-found/+not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
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