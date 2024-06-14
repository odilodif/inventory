import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent implements OnInit {
  listUsers: User[] = [];

  constructor(private _userService: UserService) {

  }

  ngOnInit(): void {
    this.getListUsers();
  }


  getListUsers() {
   this._userService.getListUsers().subscribe((data)=>{
    console.log(data)
    this.listUsers = data;
   })
  }

}
