import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions, URLSearchParams, Request } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { User } from '../models/user.model';

import 'rxjs/add/operator/map';

@Injectable()
export class CurrentUser {
    private authToken: string;
    public baseRoute: string = '//api.tavro.dev/api/v1/';
    private headers: Headers = new Headers();

    constructor( 
        private http: Http,
    ) {
        if (localStorage.getItem('JWT')) {
            this.authToken = localStorage.getItem('JWT').toString();
            this.headers.append('Authorization', `Bearer ${this.authToken}`);   
        }
    }

    public loginUser(_username: string, _password: string): Observable<Boolean> {
        let body = new URLSearchParams();
        body.set('username', _username);
        body.set('password', _password);

        return this.http
            .post(this.baseRoute + 'auth', body)
            .map((response: Response) => {
                const authToken = response.json();
                localStorage.setItem('JWT', authToken['token']);
                this.authToken = localStorage.getItem('JWT').toString();
                this.headers.append('Authorization', `Bearer ${this.authToken}`);                   
                return true;
            });
    }

    public getCurrentUser() {
        var token = localStorage.getItem('JWT').toString();
        let options = new RequestOptions({ headers: this.headers });

        return this.http
            .get(this.baseRoute + 'user', options)
            .map(response => response.json()['data']);
    }

    public verifyToken(): Boolean {
        if (localStorage.getItem('JWT')) {
            return true;
        }

        return false;
    }

    public logout() {
        localStorage.removeItem('JWT');
    }
}
