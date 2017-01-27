import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routeComponents, routeProviders, routes } from './login.routing';

import { LoginComponent } from './+login/login.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    providers: [
        ...routeProviders,
    ],
    declarations: [
        ...routeComponents,
    ],
    exports: [
        LoginComponent,
    ]
})
export class LoginModule {}
