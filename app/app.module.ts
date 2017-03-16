import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AuthenticationGuard } from './services/auth.guard';

import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { NotFoundModule } from './not-found/not-found.module';
import { LoginModule } from './login/login.module';

import { HttpService } from './services/http.service';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HomeModule,
    DashboardModule,
    MaterialModule,    
    NotFoundModule,
    LoginModule,
    HttpModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
  ],
  // providers: [
  //   AuthenticationGuard
  // ]
  providers: [
    AuthenticationGuard,
    {
      provide: HttpService,
      useFactory: (backend: XHRBackend, options: RequestOptions) => {
        return new HttpService(backend, options);
      },
      deps: [XHRBackend, RequestOptions]
    }
  ],  
})
export class AppModule {}