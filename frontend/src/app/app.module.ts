import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDogsComponent } from './admin-dogs/admin-dogs.component';
import { AdminDogComponent } from './admin-dog/admin-dog.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddDogComponent } from './add-dog/add-dog.component';
import { UserDogComponent } from './user-dog/user-dog.component';
import { UserDogsComponent } from './user-dogs/user-dogs.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AdminDogsComponent,
    AdminDogComponent,
    AddDogComponent,
    UserDogComponent,
    UserDogsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
