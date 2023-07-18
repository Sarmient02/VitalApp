import { Injectable } from '@angular/core';
import { User } from './user';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  users: User[] = [
    {id: 1, name: 'Administrator', userType: 'main', phone:'admin', password: 'admin'}
  ]

  usersChanged = new Subject<User[]>();

  ID = 1;

  activeUser!: User;

  constructor() { }

  getUsers(): User[] {
    return this.users;
  }

  getActiveUser(): User{
    return this.activeUser;
  }

  setActiveUser(user: User){
    this.activeUser = user;
  }

  getUserFromId(id: number): any{
    const index = this.users.findIndex(u => u.id == id);
    if (this.users[index]){
      return this.users[index];
    } else {
      return false;
    }
  }

  getNewID(): number {
    this.ID = this.ID + 1;
    return this.ID;
  }

  addUser(user: User): void{
    console.log("creating new user: ", user);
    user.id = this.getNewID();
    this.users.push(user);
    this.usersChanged.next(this.users);
    this.setActiveUser(user);
  }

  updateUser(id: number, user: User): void{
    const index = this.users.findIndex(c => c.id == id);
    console.log(index);
    this.users[index] = user;
    console.log("editing user: ", this.users[index])
    this.users = this.users.slice();
    this.usersChanged.next(this.users);
  }

  // Verifies for login (there's no protections whatsoever - made for testing purposes only)
  // There's also no good practices - we were very time limited so we're assuming every phone is unique.
  checkLogin(phone: string, password: string): boolean{
    const index = this.users.findIndex(u => u.phone == phone);
    if (this.users[index]){
      if (this.users[index].phone == phone && this.users[index].password == password){
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }


}
