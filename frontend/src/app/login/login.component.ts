import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {}

  login(user: String, pass: String){
    if(user == "user" && pass == "user"){
      this.router.navigateByUrl('user/dogs'); 
    }
    else if(user == "admin" && pass == "admin"){
      this.router.navigateByUrl('admin/dogs');
    }
  }
}
