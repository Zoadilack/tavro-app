import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule, MdDialog } from '@angular/material';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/auth.service';
import { AlertService } from '../../services/alert.service';

import { Account } from '../../models/account.model';
import { User } from '../../models/user.model';

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
        private accounts: Account[],
    ) { }

    public ngOnInit() {
        let user = <User>JSON.parse(localStorage.getItem('current_user'));
        this.accounts = user.user_accounts;
    }
}
