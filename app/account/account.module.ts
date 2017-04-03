import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { FormsModule, FormGroup, ReactiveFormsModule, FormControl, FormBuilder, Validators } from '@angular/forms';

import { routeComponents, routeProviders, routes } from './account.routing';

import { AccountSignupComponent } from './+signup/account-signup.component';
import { UserAccountsComponent } from './+user-accounts/user-accounts.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        ...routeProviders,
    ],
    declarations: [
        ...routeComponents,
    ],
})
export class AccountModule {

}
