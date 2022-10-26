import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  title = "fill out form below";

  name = "";
  age = 0;
  gender = "";

  save(){
    console.log(this.name + " " + this.age + " " + this.gender);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
