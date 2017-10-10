import {Injectable} from '@angular/core';
import {User} from './user';
import {USERS} from './mock-user';
@Injectable()
export class UserService {
    getUser(id: number): Promise<User> {
        return this.getUsers()
                   .then(users => users.find(user => user.id === id));
      }
}