import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UserService } from './user.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {
    constructor(private current: UserService, private router: Router) {
    }

    public canActivate() {
        console.log('auth', this.current.isAuthed);
        if (!!this.current.isAuthed) {
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }
}
