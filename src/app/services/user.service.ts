import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  // obtener datos de firebase
  constructor(private angularFireDatabase: AngularFireDatabase) {}
  // todos los usuarios
    getUsers() {
      return this.angularFireDatabase.list('/users');
    }
    // un usuario
    getUserById(uid) {
      return this.angularFireDatabase.object('/users/' + uid);
    }
    // reutilizar id
    createUser(user) {
      return this.angularFireDatabase.object('/users/' + user.uid).set(user);
    }
    editUser(user) {
      return this.angularFireDatabase.object('/users/' + user.uid).set(user);
    }
    // guardar imagen del usuario
    setAvatar(avatar, uid) {
      return this.angularFireDatabase.object('/users/' + uid + '/avatar').set(avatar);
    }
    addFriend(userId, friendId) {
      this.angularFireDatabase.object('users/' + userId + '/friends/' + friendId).set(friendId);
      return this.angularFireDatabase.object('users/' + friendId + '/friends/' + userId).set(userId);
    }
}