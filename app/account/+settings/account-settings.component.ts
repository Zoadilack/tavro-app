import { NgModule, Component, AfterViewInit, OnInit, Injectable } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
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

import { Observable } from 'rxjs/Rx';

import { BrowserModule } from '@angular/platform-browser'

@Component({
    selector: 'account-settings',
    templateUrl: './account-settings.component.html',
    styleUrls: ['./account-settings.component.scss'],
})

@NgModule({
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule, MaterialModule.forRoot() ],
  declarations: [ AccountSettingsComponent ],
  bootstrap: [ AccountSettingsComponent ]
})

export class AccountSettingsComponent {

    public currentUser = localStorage.getItem('currentUser');
    public accountSettingsForm: FormGroup; // our model driven form
    public submitted: boolean; // keep track on whether form is submitted
    public events: any[] = []; // use later to display form changes
    public account = null;

    constructor( 
        private userService: UserService,
        private router: Router,
        private authService: AuthenticationService,
        private alertService: AlertService,
        public dialog: MdDialog,      
        private http: HttpService,
        private _fb: FormBuilder,
        private activatedRoute: ActivatedRoute
    ) { }

    public ngOnInit() {

        if (!this.userService.isAuthed()) {
            this.router.navigate(['/login']);
        }

        let accountId = 0;

        // subscribe to router event
        this.activatedRoute.params.subscribe((params: Params) => {
            accountId = params['accountId'];
        });

        //if there's no accountId, get outta here
        if(!accountId) {
            this.router.navigate(['/dashboard']);
        }

        const currentUser = localStorage.getItem('currentUser');

        console.log('accountId', accountId);
        this.account = this.loadAccount(accountId);

        this.accountSettingsForm = new FormGroup({
            name: new FormControl(this.account.name, [<any>Validators.required, <any>Validators.minLength(3)]),
            body: new FormControl(this.account.body, [<any>Validators.required]),
        });
        
    }

    private getAccount(accountId) : Observable<Account[]> {

        return this.http.get(global.api + 'accounts/' + accountId)
            // ...and calling .json() on the response to return data
            // @TODO: something with the response here... probably redirect to their
            // Account settings page to define "stuff"
            .map((res:Response) => res.json()['data'])
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    private loadAccount(accountId) {
        // Get all AccountTypes
         return this.getAccount(accountId)
            .subscribe(
                res => this.account = res, //Bind to view
                err => {
                    // Log errors if any
                    console.log(err);
                });
    }

}