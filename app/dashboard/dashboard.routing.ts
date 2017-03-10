import { Provider } from '@angular/core';
import { Routes } from '@angular/router';

import { DashboardComponent } from './+dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
];

// Array of routing components to be declared in the module.
export const routeComponents = [
    DashboardComponent,
];

// Array of guards and resolvers to be provided in the module.
export const routeProviders: Provider[] = [

];
