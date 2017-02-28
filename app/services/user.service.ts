import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import global = require('./globals');

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    public user: Object = JSON.parse(localStorage.getItem('currentUser'));
    public isAuthed():boolean {
        if(localStorage.getItem('JWT') === null || localStorage.getItem('currentUser') === null) {
            return false;
        }
        return true;
    };

    public getCurrentUser() {
        return this.http.get(global.api + 'user', this.jwt())
            .map((response: Response) => {
                localStorage.setItem('currentUser', JSON.stringify(response.json()['data']));
            });
    }

    private jwt() {
        let token = localStorage.getItem('JWT').toString();

        if (token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + token });
            return new RequestOptions({ headers: headers });
        }
    }
}
