import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import global = require('./globals');
@Component({
    selector: 'signup-form',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {

    public userSignup(name: string, username: string, password: string) {
        return this.http.get(global.api + 'user', this.jwt())
            .map((response: Response) => {
                localStorage.setItem('currentUser', JSON.stringify(response.json()['data']));
            });
    }

}
