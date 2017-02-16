import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams, Request  } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map'

import { UserService } from './user.service';

import global = require('./globals');

@Injectable()
export class AuthenticationService {
    
    constructor(
        private http: Http,
        public user: UserService
    ) { }

    public login(username: string, password: string) {
        let body = new URLSearchParams();
        body.set('username', username);
        body.set('password', password);

        return this.http
            .post(global.api + 'auth', body)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                const authToken = response.json();
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('JWT', authToken['token']);
            })
            .flatMap((response) => this.user.getCurrentUser());
    }
    

    public logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('JWT');
    }
}