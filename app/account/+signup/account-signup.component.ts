import { NgModule, Component, AfterViewInit, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule, MdDialog } from '@angular/material';
import { FormsModule, FormGroup, ReactiveFormsModule, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Response } from '@angular/http';
import { HttpService } from '../../services/http.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/auth.service';
import { AlertService } from '../../services/alert.service';
import global = require('../../services/globals');

import { User } from '../../models/user.model';
import { AccountType } from '../../models/account_type.model';
import { Account } from '../../models/account.model';

import {Observable} from 'rxjs/Rx';

import {BrowserModule} from '@angular/platform-browser'

@Component({
    selector: 'account-signup',
    templateUrl: './account-signup.component.html',
    styleUrls: ['./account-signup.component.scss'],
})

@NgModule({
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule, MaterialModule.forRoot() ],
  declarations: [ AccountSignupComponent ],
  bootstrap: [ AccountSignupComponent ]
})

export class AccountSignupComponent {

    accountTypes: AccountType[];

    public currentUser = localStorage.getItem('currentUser');
    public accountSignupForm: FormGroup; // our model driven form
    public submitted: boolean; // keep track on whether form is submitted
    public events: any[] = []; // use later to display form changes

    constructor( 
        private userService: UserService,
        private router: Router,
        private authService: AuthenticationService,
        private alertService: AlertService,
        public dialog: MdDialog,      
        private http: HttpService,
        private _fb: FormBuilder
    ) { }

    public ngOnInit() {

        if (!this.userService.isAuthed()) {
            this.router.navigate(['/login']);
        }

        const currentUser = localStorage.getItem('currentUser');

        this.loadAccountTypes();

        this.accountSignupForm = new FormGroup({
            name: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
            body: new FormControl('', [<any>Validators.required]),
            account_type: new FormControl('', [<any>Validators.required]),
            user: new FormControl('', [<any>Validators.required]),
        });
        
    }

    signup(account: Account, isValid: boolean) {
        
        this.submitted = true; // set form submit to true

        account.user = JSON.parse(this.currentUser).id;
        
        // check if model is valid
        // if valid, call API to save Account
        console.log(account, isValid);

    }

    loadAccountTypes() {
        // Get all AccountTypes
         this.getAccountTypes()
            .subscribe(
                res => this.accountTypes = res, //Bind to view
                err => {
                    // Log errors if any
                    console.log(err);
                });
    }

    getAccountTypes() : Observable<AccountType[]> {

         // ...using get request
         return this.http.get(global.api + 'account_types')
        // ...and calling .json() on the response to return data
            .map((res:Response) => res.json()['data'])
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }

}