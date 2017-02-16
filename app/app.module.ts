import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { NotFoundModule } from './not-found/not-found.module';
import { LoginModule } from './login/login.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HomeModule,
    DashboardModule,
    NotFoundModule,
    LoginModule,
    HttpModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
  ]
})
export class AppModule {}
