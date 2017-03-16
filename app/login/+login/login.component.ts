import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule, MdDialog } from '@angular/material';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/auth.service';
import { AlertService } from '../../services/alert.service';

import { User } from '../../models/user.model';

import { ForgotPasswordDialog } from './forgot-password/forgot-password-dialog.component';

@Component({
    selector: 'login-form',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    public loading: boolean = false;

    constructor( 
        private userService: UserService,
        private router: Router,
        private authService: AuthenticationService,
        private alertService: AlertService,
        public dialog: MdDialog,      
    ) { }

    public openDialog() {
        this.dialog.open(ForgotPasswordDialog);
    }  

    public ngOnInit() {
        if (this.userService.isAuthed()) {
            this.router.navigate(['/dashboard']);
        }
    }

    public login(username: string, password: string) {
        this.loading = true;
        this.authService.login(username, password)
            .subscribe(() => { 
                this.router.navigate(['/dashboard']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
    }

    private logout() {
        this.authService.logout();
    }
}
