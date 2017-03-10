import { Provider } from '@angular/core';
import { Routes } from '@angular/router';

import { LoginComponent } from './+login/login.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
];

// Array of routing components to be declared in the module.
export const routeComponents = [
    LoginComponent,
];

// Array of guards and resolvers to be provided in the module.
export const routeProviders: Provider[] = [

];