import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { routeComponents, routeProviders, routes } from './not-found.routing';

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
export class NotFoundModule {

}
