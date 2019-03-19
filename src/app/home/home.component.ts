import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
    @Component({
      selector: 'app-home',
      templateUrl: './home.component.html',
      styleUrls: ['./home.component.css']
    })
    export class HomeComponent implements OnInit {
      // User de interfaces/user.ts
  friends: User[];
  constructor() {
    /*let c: number = 1;
    let b: number = 2;
    console.log(c + b);
    let e: string = '1';
    let f: string = '2';
    console.log(e + f);
    let g: boolean = true;
    let h: object = {};
    console.log(g);
    console.log(h);
    let i = [c, b, e, f, g, h];
    console.log(i);
    let j: boolean [] = [true, g];
    console.log(j);
    let l: object [] = [{}, h];
    console.log(l);
    let k: any [] = [1, 'qwe', {}, [], true];
    console.log(k);
    let myuser: User = {
      nick: 'Uriel',
      // subnick: 'Uriel',
      age: 36,
      email: 'a@a.com',
      friend: true,
      uid: 1
    };
    console.log(myuser);
    let users: User[] = [
      myuser
    ];
    console.log(users);*/

    let usuario1: User = {
      nick: 'Eduardo',
      age: 24,
      email: 'ed@aoe.aoe',
      friend: true,
      uid: 1
    };
    let usuario2: User = {
      nick: 'Freddy',
      age: 28,
      email: 'fred@aoe.aoe',
      friend: true,
      uid: 1
    };
    let usuario3: User = {
      nick: 'Yuliana',
      age: 18,
      email: 'yuli@aoe.aoe',
      friend: true,
      uid: 1
    };
    let usuario4: User = {
      nick: 'Ricardo',
      age: 17,
      email: 'rick@aoe.aoe',
      friend: false,
      uid: 1
    };
    let usuario5: User = {
      nick: 'Marcos',
      age: 30,
      email: 'marcos@aoe.aoe',
      friend: false,
      uid: 1
    };
    this.friends = [usuario1, usuario2, usuario3, usuario4, usuario5];

  }
  ngOnInit() {
  }
}

