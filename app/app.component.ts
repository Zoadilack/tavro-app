import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { UserService } from './services/user.service';

@Component({
  selector: 'tavro-app',
  styleUrls: ['../assets/css/index.scss', 'app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(
    public current: UserService
  ) {  

  }

}
