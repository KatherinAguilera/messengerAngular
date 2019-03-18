import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    // User de interfaces/user.ts
    let myUser: User = {
      nick: 'Eduardo',
      age: 22,
      email: 'eduardo@hotmail.com',
      friend: true,
      uid: 1,
    };
    console.log(myUser);
    let users: User[] = [myUser];
    console.log(myUser);
  }
  ngOnInit() {
  }

}
