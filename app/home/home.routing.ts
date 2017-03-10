import { Provider } from '@angular/core';
import { Routes } from '@angular/router';

import { HomeComponent } from './+home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
];

// Array of routing components to be declared in the module.
export const routeComponents = [
    HomeComponent,
];

// Array of guards and resolvers to be provided in the module.
export const routeProviders: Provider[] = [

];