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
                localStorage.setItem('auth_token', authToken['token']);
            })
            .flatMap((response) => this.user.getCurrentUser());
    }

    public logout() {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    }

    public sendReset(username: string) {
        let body = JSON.stringify({'email': username});
        return this.http.post(global.api + 'auth/forgot', body)
            .map((response: Response) => {
                return JSON.parse(response['_body']);
            });
    }

    // public jwt() {
    //     let token = localStorage.getItem('JWT').toString();
    //     let headers = new Headers();

    //     if (token) {
    //         headers.set('Authorization', 'Bearer ' + token);
    //     } else {
    //         headers.set('Unauthorized', '');
    //     }

    //     return new RequestOptions({ headers: headers });
    // }    
}
