import { Provider } from '@angular/core';
import { Routes } from '@angular/router';

import { AccountSignupComponent } from './+signup/account-signup.component';

export const routes: Routes = [
    { path: '', component: AccountSignupComponent },
];

// Array of routing components to be declared in the module.
export const routeComponents = [
    AccountSignupComponent,
];

// Array of guards and resolvers to be provided in the module.
export const routeProviders: Provider[] = [

];
