import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import global = require('./globals');

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    public getCurrentUser() {
        // var token = localStorage.getItem('JWT').toString();
        // let headers = new Headers({ 'Authorization': 'Bearer' + token})
        // let options = new RequestOptions({ headers: headers });
        // console.log('wtf');

        // return this.http
        //     .get('//api.tavro.dev/api/v1/user', options)
        //     .map(response => {
        //         console.log('wtf');
        //         localStorage.setItem('currentUser', JSON.stringify(response.json()['data']));
        //     });

        return this.http.get(global.api + 'user', this.jwt())
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
        let token = localStorage.getItem('JWT').toString();
        console.log('token', token);

        if (token) {
            console.log('token check');
            let headers = new Headers({ 'Authorization': 'Bearer ' + token });
            return new RequestOptions({ headers: headers });
        }
    }

    public isAuthed:boolean = localStorage.getItem('JWT') ? true : false;
}
