import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';
import {AuthenticationService} from '../services/authentication.service';
import {Route, Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RequestsService} from '../services/requests.service';
    @Component({
      selector: 'app-home',
      templateUrl: './home.component.html',
      styleUrls: ['./home.component.css']
    })
    export class HomeComponent implements OnInit {
      // User de interfaces/user.ts
      friends: User[];
      user: User;
      query: string = '';
      friendEmail: string = '';
        // inyectar un servicio
      constructor(private userService: UserService, private authenticationService: AuthenticationService, private router: Router, private modalService: NgbModal, private requestsService: RequestsService) {
        this.userService.getUsers().valueChanges().subscribe(
          (data: User[] ) => {
            this.friends = data;
          }, (error) => {
            console.log(error);
          }
          );
          this.authenticationService.getStatus().subscribe(
            (status) => {
              this.userService.getUserById(status.uid).valueChanges().subscribe(
                (data: User) => {
                  this.user = data;
                  console.log(this.user);
                }, (error) => {
                  console.log(error);
                });
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
    this.authenticationService.getStatus().subscribe((status) => {
      this.userService.getUserById(status.uid).valueChanges().subscribe((data: User) => {
        this.user = data;
      });
    });
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }
  sendRequest() {
    const request = {
      timestamp: Date.now(),
      receiver_email: this.friendEmail,
      sender: this.user.uid,
      status: 'pending'
    };
    this.requestsService.createRequest(request).then(() => {
      alert('Solicitud Enviada');
    }).catch((error) => {
      alert('Hubo un error');
      console.log(error);
    });
  }
}

