import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/auth.service';
import { AlertService } from '../../services/alert.service';

import { User } from '../../models/user.model';

@Component({
    selector: 'login-form',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    public loading: boolean = false;

    constructor( 
        private userService: UserService,
        private router: Router,
        private authService: AuthenticationService,
        private alertService: AlertService,         
    ) {
    }

    private ngOnInit() {
        if (this.userService.isAuthed) {
            this.router.navigate(['dashboard']);
        }
    }

    public login(username: string, password: string) {
        this.loading = true;
        this.authService.login(username, password)
            .subscribe(data => { 
                setTimeout(() => this.router.navigate(['dashboard']), 400);
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
