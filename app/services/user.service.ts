import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from './http.service';

import global = require('./globals');

@Injectable()
export class UserService {
    constructor(private http: HttpService) { }

    public user: Object = JSON.parse(localStorage.getItem('currentUser'));
    public isAuthed():boolean {
        if(localStorage.getItem('JWT') === null || localStorage.getItem('currentUser') === null) {
            return false;
        }
        return true;
    };

    public getCurrentUser() {
        console.log(this.http.head.toString());

        return this.http.get(global.api + 'user')
            .map((response: Response) => {
                localStorage.setItem('currentUser', JSON.stringify(response.json()['data']));
            });
    }

    // private jwt() {
    //     let token = localStorage.getItem('JWT').toString();
    //     let headers = new Headers();

    //     if (token) {
    //         headers.set('Authorization', 'Bearer ' + token);
    //         // let headers = new Headers({ 'Authorization': 'Bearer ' + token });
    //         return new RequestOptions({ headers: headers });
    //     } else {
    //         headers = new Headers({});
    //     }

    //     return new RequestOptions({ headers: headers });
    // }
}
