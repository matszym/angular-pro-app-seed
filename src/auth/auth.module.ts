import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// third party mdule
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// shared modules
import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [
    {
        path: 'auth',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'login',
            },
            {
                path: 'login',
                loadChildren: './login/login.module#LoginModule',
            },
            {
                path: 'register',
                loadChildren: './register/register.module#RegisterModule',
            },
        ]
    }
];

export const firebaseConfig:FirebaseAppConfig = {
    apiKey: "AIzaSyCEhtqv2G1EgukOuohwz4EGwITOFiSYvvQ",
    authDomain: "fitness-app-ef104.firebaseapp.com",
    databaseURL: "https://fitness-app-ef104.firebaseio.com",
    projectId: "fitness-app-ef104",
    storageBucket: "fitness-app-ef104.appspot.com",
    messagingSenderId: "553119581621"
};

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        SharedModule.forRoot(),
    ],
})
export class AuthModule {}
