import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';
    @Component({
      selector: 'app-home',
      templateUrl: './home.component.html',
      styleUrls: ['./home.component.css']
    })
    export class HomeComponent implements OnInit {
      // User de interfaces/user.ts
      friends: User[];
      query: string = '';
        // inyectar un servicio
      constructor(private userService: UserService) {
        this.friends = userService.getFriends();
      }
  ngOnInit() {
  }
}

