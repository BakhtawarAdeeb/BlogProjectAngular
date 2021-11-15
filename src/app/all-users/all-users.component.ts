import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

//import { TestObject } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users : any;

  constructor(private service :AuthService) { }

  ngOnInit() {
    let response = this.service.getUsers();
    response.subscribe(
      data =>{ this.users = data;
     
     });
  }

  public removeUser(username : string){
    let response = this.service.deleteUser(username);
    response.subscribe(data => this.users = data);
  }

}
