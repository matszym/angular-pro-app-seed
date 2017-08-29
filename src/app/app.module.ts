import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules

import { AuthModule } from '../auth/auth.module';
import { HealthModule } from '../health/health.module';

// containers
import { AppComponent } from './containers/app/app.component';

// components
import { AppHeader } from './components/app-header/app-header.component';
import { AppNav } from './components/app-nav/app-nav.component';

// routes
export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'schedule' }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule,
    HealthModule,
  ],
  declarations: [
    AppComponent,
    AppHeader,
    AppNav,
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
