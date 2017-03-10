import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AlertService } from '../services/alert.service';
import { AuthenticationService } from '../services/auth.service';
import { UserService } from '../services/user.service';

import { routeComponents, routeProviders, routes } from './login.routing';

import { LoginComponent } from './+login/login.component';
import { ForgotPasswordDialog } from './+login/forgot-password/forgot-password-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule.forChild(routes),
    ],
    providers: [
        ...routeProviders,
        AlertService,
        AuthenticationService,
        UserService
    ],
    declarations: [
        ...routeComponents,
        ForgotPasswordDialog,
    ],
    exports: [
        LoginComponent,
    ],
    entryComponents: [ForgotPasswordDialog],
})
export class LoginModule {}