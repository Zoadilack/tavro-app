import { Component, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { CurrentUser } from '../../services/user.service';

import { User } from '../../models/user.model';

@Component({
    selector: 'login-form',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    public user: User;
    public isAuth: boolean = false;

    constructor( 
        private userService: CurrentUser, 
    ) {
        if (this.userService.verifyToken()) {
            this.isAuth = true;
            this.userService.getCurrentUser().subscribe(response => {
                this.user = response;
            });
        } 
    }

    public processLogin(username: string, password: string) {
        this.userService
            .loginUser(username, password)
            .map((response: boolean) => response)
            .subscribe(response => { 
                this.isAuth = true;

                if (response) {
                    this.userService.getCurrentUser().subscribe(response => {
                        this.user = response;
                    });
                }
            });
    }

    private logout() {
        this.userService.logout();
        this.isAuth = false;
    }

}