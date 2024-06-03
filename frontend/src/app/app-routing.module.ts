import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDogsComponent } from './admin-dogs/admin-dogs.component';
import { AdminDogComponent } from './admin-dog/admin-dog.component';
import { AddDogComponent } from './add-dog/add-dog.component';
import { UserDogComponent } from './user-dog/user-dog.component';
import { UserDogsComponent } from './user-dogs/user-dogs.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'admin/dogs', component: AdminDogsComponent },
  { path: 'admin/dog/:id', component: AdminDogComponent },
  { path: 'add', component: AddDogComponent },
  { path: 'user/dog/:id', component: UserDogComponent},
  { path: 'user/dogs', component: UserDogsComponent},
  { path: 'login', component: LoginComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
