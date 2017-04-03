import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from './http.service';

import global = require('./globals');

@Injectable()
export class UserService {
    constructor(private http: HttpService) { }

    public user: Object = JSON.parse(localStorage.getItem('currentUser'));
    public isAuthed():boolean {
        if(localStorage.getItem('auth_token') === null || localStorage.getItem('currentUser') === null) {
            return false;
        }
        return true;
    };

    public getCurrentUser() {
        return this.http.get(global.api + 'user')
            .map((response: Response) => {
                localStorage.setItem('currentUser', JSON.stringify(response.json()['data']));
                return response.json()['data'];
            });
    }
}
