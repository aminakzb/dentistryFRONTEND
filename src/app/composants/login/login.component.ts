import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modules/user';
import { LoginUserService } from 'src/app/services/login-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  user:User=new User();

  constructor(private loginUserService:LoginUserService, private router: Router){}


  ngOnInit(): void {
   
  }

  userLogin(){
    console.log(this.user);
    this.loginUserService.loginUser(this.user).subscribe(() => {
    this.router.navigate(['/accueil'])
    },error=>alert("error"))
    
  }

}
