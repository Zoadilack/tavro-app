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
    selector: 'user-accounts',
    templateUrl: './user-accounts.component.html',
    styleUrls: ['./user-accounts.component.scss'],
    providers: [Account]
})
export class UserAccountsComponent implements OnInit {
    public loading: boolean = false;

    public currentUser: User;

    constructor( 
        private userService: UserService,
        private router: Router,
        private accounts: Account[],
    ) { }

    public ngOnInit() {
        this.currentUser = this.userService.user;
        console.log('this.currentUser', this.currentUser);
        //this.accounts = this.currentUser.user_accounts;
    }
}
