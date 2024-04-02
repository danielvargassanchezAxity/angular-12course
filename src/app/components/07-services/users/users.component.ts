import { Component, OnInit } from '@angular/core';
import { BaseUser, User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  selectedUser = new User();
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(response => {
      this.users = response;
    });
  }

  save(user: User): void {
    if (user.id === null) {
      this.createUser(user);
    } else {
      this.edit(user);
    }
  }

  createUser(user: User): void {
    const { id, ...baseUserData } = user;
    const baseUser = new BaseUser();
    Object.assign(baseUser, baseUserData);
    this.userService.createUser(baseUser).subscribe(res => {
      this.getUsers();
    });
  }
  
  delete(user: User): void {
    this.userService.deleteUser(user.id ?? '').subscribe( () =>{
      this.getUsers();
    });
  }

  selectUserToEdit(user: User): void {
    this.selectedUser = user;
  }

  edit(user: User): void {
    this.userService.editUser(user).subscribe( () =>{
      this.getUsers();
    });
  }

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
