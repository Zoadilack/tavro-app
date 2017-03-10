import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routeComponents, routeProviders, routes } from './home.routing';

import { HomeComponent } from './+home/home.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    providers: [
        ...routeProviders,
    ],
    declarations: [
        ...routeComponents,
    ],
})
export class HomeModule {

}
