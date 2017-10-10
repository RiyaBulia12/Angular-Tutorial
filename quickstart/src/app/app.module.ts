import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail.component';
import { UsersComponent } from './users.component';
import { UserService } from './user.service';
import { AppComponent }  from './app.component';
import { DashboardComponent }  from './dashboard.component';
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule , FormsModule, 
    AppRoutingModule
  ],
  declarations: [ AppComponent, UserDetailComponent, UsersComponent, DashboardComponent ],
  providers:    [ UserService ],
  bootstrap:    [ AppComponent ]
})


export class AppModule { }
