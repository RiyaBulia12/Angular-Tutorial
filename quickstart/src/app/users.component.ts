import { Component } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import { OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'selector-users',
  styleUrls: ['./users.component.css'],
  templateUrl: '/users.component.html',
  providers: [UserService],
})

export class UsersComponent implements OnInit{
  title = 'Learning Angular';
  users:User[];
  selectedUser: User;
  constructor(private router: Router, 
    private userService: UserService) {}

   gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedUser.id]);
  }

  getUsers(): void {
    this.UserService.getUsers().then(users => this.users = users);
  }

  ngOnInit(): void {
    this.getUsers();
  }
  
  
  onSelect(user: User): void {
    this.selectedUser = user;
  }
}