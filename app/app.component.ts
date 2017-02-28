import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { AuthenticationService } from './services/auth.service';
import { UserService } from './services/user.service';
import global = require('./services/globals');

@Component({
  selector: 'tavro-app',
  styleUrls: ['../assets/css/index.scss', 'app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html'
})
export class AppComponent {
  public date = new Date();
  public version = global.version;

  constructor(
    public current: UserService,
    public auth: AuthenticationService,
  ) {  

  }

}
