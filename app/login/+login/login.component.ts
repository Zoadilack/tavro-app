import { Component, Inject } from '@angular/core';

@Component({
    selector: 'login-form',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

    public processLogin(username: string, password: string) {
        console.log('user/pass', username, password);
    }
}