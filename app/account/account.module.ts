import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { routeComponents, routeProviders, routes } from './account.routing';

import { AccountSignupComponent } from './+signup/account-signup.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule
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
