import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './components/login/login.component';
import { TwootsComponent } from './components/twoots/twoots.component';
import { NewTwootComponent } from './components/new-twoot/new-twoot.component';
import { TwootComponent } from './components/twoot/twoot.component';
import { ProfileComponent } from './components/profile/profile.component';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Global state management
import { StoreModule } from '@ngrx/store';
import { twootsReducer } from './config/twoots.reducer';
import { usersReducer } from './config/users.reducer';

const config = {
  apiKey: environment.firebaseApiKey,
  authDomain: "fir-auth-c91a1.firebaseapp.com",
  databaseURL: "https://fir-auth-c91a1.firebaseio.com",
  projectId: "fir-auth-c91a1",
  storageBucket: "fir-auth-c91a1.appspot.com",
  messagingSenderId: "92877570975",
  appId: "1:92877570975:web:3e270fbb2cb681cba033aa",
  measurementId: "G-JB0NZ4TZSW"
}

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    LoginComponent,
    TwootsComponent,
    NewTwootComponent,
    TwootComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    StoreModule.forRoot({
      twoots: twootsReducer,
      users: usersReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
