import { Component, AfterViewInit, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule, MdDialog } from '@angular/material';

import { Response } from '@angular/http';
import { HttpService } from '../../services/http.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/auth.service';
import { AlertService } from '../../services/alert.service';
import global = require('../../services/globals');

import { User } from '../../models/user.model';
import { AccountType } from '../../models/account_type.model';

import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'account-signup',
    templateUrl: './account-signup.component.html',
    styleUrls: ['./account-signup.component.scss'],
})

@Injectable()

export class AccountSignupComponent {

    accountTypes: AccountType[];

    constructor( 
        private userService: UserService,
        private router: Router,
        private authService: AuthenticationService,
        private alertService: AlertService,
        public dialog: MdDialog,      
        private http: HttpService
    ) { }

    public ngOnInit() {

        if (!this.userService.isAuthed()) {
            this.router.navigate(['/login']);
        }

        this.loadAccountTypes();
        
    }

    loadAccountTypes() {
        // Get all AccountTypes
         this.getAccountTypes()
            .subscribe(
                //accountTypes => this.accountTypes = accountTypes, //Bind to view
                err => {
                    // Log errors if any
                    console.log(err);
                });
    }

    getAccountTypes() : Observable<AccountType[]> {

         // ...using get request
         return this.http.get(global.api + 'account_types')
        // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }

}
