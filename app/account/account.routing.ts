import { Provider } from '@angular/core';
import { Routes } from '@angular/router';

import { AccountSignupComponent } from './+signup/account-signup.component';
import { UserAccountsComponent } from './+user-accounts/user-accounts.component';

export const routes: Routes = [
    { path: '/signup', component: AccountSignupComponent },
    { path: '/accounts', component: UserAccountsComponent },
];

// Array of routing components to be declared in the module.
export const routeComponents = [
    AccountSignupComponent,
    UserAccountsComponent,
];

// Array of guards and resolvers to be provided in the module.
export const routeProviders: Provider[] = [

];
