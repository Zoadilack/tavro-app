import { Provider } from '@angular/core';
import { Routes } from '@angular/router';

import { NotFoundComponent } from './not-found.component';

export const routes: Routes = [
    { path: '', component: NotFoundComponent },
];

// Array of routing components to be declared in the module.
export const routeComponents = [
    NotFoundComponent,
];

// Array of guards and resolvers to be provided in the module.
export const routeProviders: Provider[] = [

];
