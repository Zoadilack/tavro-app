import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CurrentUser } from '../services/user.service';

import { routeComponents, routeProviders, routes } from './login.routing';

import { LoginComponent } from './containers/login.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    providers: [
        ...routeProviders,
        CurrentUser
    ],
    declarations: [
        ...routeComponents,
    ],
    exports: [
        LoginComponent,
    ]
})
export class LoginModule {}
