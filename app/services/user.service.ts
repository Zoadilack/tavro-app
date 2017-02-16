import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import global = require('./globals');

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    public getCurrentUser() {
        console.log('setting user');
        return this.http.get(global.api + 'user', { headers: {'Authorization': 'Bearer ' + localStorage.getItem('JWT')}})
            .map((response: Response) => {
                console.log('setting user');
                localStorage.setItem('currentUser', JSON.stringify(response.json()['data']));
                //return response.json()['data']
            });
    }

    public user: Object = JSON.parse(localStorage.getItem('currentUser'));

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let token = localStorage.getItem('JWT');
        if (token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + token });
            return new RequestOptions({ headers: headers });
        }
    }

    public isAuthed:boolean = localStorage.getItem('JWT') ? true : false;
}
