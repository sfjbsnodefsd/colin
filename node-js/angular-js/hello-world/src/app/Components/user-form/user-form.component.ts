import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import User from 'src/app/Entity/User';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  title = "fill out form below";

  user: User = new User();

  save(){
    const observables = this.userService.saveUser(this.user);
    observables.subscribe(
      (response: any)=>{
        console.log(response);
      },
      function (error){
        console.log(error);
      }
    );
  }

  constructor(private userService: UserService) {}

  ngOnInit(): void {
  }

}
