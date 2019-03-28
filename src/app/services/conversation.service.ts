import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {
// injectar firebase database
  constructor(private angularFireDatabase: AngularFireDatabase) { }
  createConversation(conversation) {
    return this.angularFireDatabase.object('conversations/' + conversation.uid + '/' + conversation.timestamp).set(conversation);
  }
  // obtenerlas
  getConversation(uid) {
    return this.angularFireDatabase.list('conversations/' + uid);
  }
  editConversation(conversation) {
    return this.angularFireDatabase.object('conversations/' + conversation.uid + '/' + conversation.timestamp).set(conversation);
  }
}