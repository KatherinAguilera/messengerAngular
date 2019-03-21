import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';
import {AuthenticationService} from '../services/authentication.service';
import {Route, Router} from '@angular/router';
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
      constructor(private userService: UserService, private authenticationService: AuthenticationService, private router: Router) {
        this.userService.getUsers().valueChanges().subscribe((data: User[]) => {
          this.friends = data;
        }, (error) => {
          console.log(error);
        });
      }
  ngOnInit() {
  }
  logout() {
    this.authenticationService.logOut().then(() => {
      alert('Sesion Cerrada');
      this.router.navigate(['login']);
    }).catch((error) => {
      console.log(error);
    });
  }
}

