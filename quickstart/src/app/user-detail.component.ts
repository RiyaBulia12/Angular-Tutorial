import { Component, Input } from '@angular/core';
import { User } from './user';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { OnInit } from '@angular/core';

import { UserService } from './user.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  template:`
    <div *ngIf="user">
    <h2>{{user.name}}</h2>
    <div><label>id: </label>{{user.id}}</div>
 
    <div>
        <label>Editable Text: </label>
        <input [(ngModel)]="user.name" placeholder="name">
    </div>
    </div>
  `,
})

export class UserDetailComponent implements OnInit{
   @Input() user:User;
   constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.userService.getUser(+params.get('id')))
      .subscribe(user => this.user = user);
  }
  goBack(): void {
    this.location.back();
  }
}