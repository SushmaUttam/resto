import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  //inputs: [`isLoggedIn`],
  outputs: [`isLoggedIn`]
})
export class LoginComponent implements OnInit {
  alert:boolean=false;
  flag:boolean=false;
  email:string;
  password:string;
  public collection:any;
  users;
  //@Input() public isLoggedIn;
  @Output() isLoggedIn = new EventEmitter<boolean>();
  constructor(private commonService:CommonService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.commonService.getUsers().subscribe((result)=>{
      this.collection=result;
      this.users = JSON.parse(JSON.stringify(this.collection));
    });
    for (var i in this.users){
      if(this.email == this.users[i].email && this.password == this.users[i].password){
        console.log("Login Successfull!");
        this.flag=true;
        this.alert=true;
        this.isLoggedIn.emit(true);
        console.log("isLoggedIn: ",this.isLoggedIn);
        this.router.navigate(['/list']);
        break;
      }
    }
    if(this.flag == false){
      alert("Please enter valid Email Address and Password.");
    }
  }

}
