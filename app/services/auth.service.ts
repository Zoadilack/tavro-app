import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams, Request  } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map'

import { UserService } from './user.service';

import global = require('./globals');

@Injectable()
export class AuthenticationService {
    
    constructor(
        private http: Http,
        private router: Router,
        public user: UserService
    ) { }

    public login(username: string, password: string) {
        let body = new URLSearchParams();
        body.set('username', username);
        body.set('password', password);

        return this.http.post(global.api + 'auth', body)
            .map((response: Response) => {
                const authToken = response.json();
                localStorage.setItem('JWT', authToken['token']);
            })
            .flatMap((response) => this.user.getCurrentUser());
    }
    

    public logout() {
        localStorage.removeItem('JWT');
        localStorage.removeItem('currentUser');
        setTimeout(() => this.router.navigate(['login']), 400);
    }
}
