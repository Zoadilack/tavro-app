import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'tavro-app',
  styleUrls: ['../assets/css/index.scss', 'app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html'
})
export class AppComponent {
  title: string;

  constructor() {
    this.title = 'tavro';
  }
}
