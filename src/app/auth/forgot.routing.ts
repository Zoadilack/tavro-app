import { Provider } from '@angular/core';
import { Routes } from '@angular/router';

import { ForgotPasswordComponent } from './forgot.component';

export const routes: Routes = [
    {
        path: 'auth/forgot',
        component: ForgotPasswordComponent
    },
];

// Array of routing components to be declared in the module.
export const routeComponents = [

];

// Array of guards and resolvers to be provided in the module.
export const routeProviders: Provider[] = [

];
