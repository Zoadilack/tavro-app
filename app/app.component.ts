import { Component, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'tavro-app',
  styleUrls: ['app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title: string;

  constructor() {
    this.title = 'tavro';
  }
}
