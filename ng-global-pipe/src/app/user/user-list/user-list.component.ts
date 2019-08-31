import { Component, OnInit } from '@angular/core';

interface User {
  name: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public userList: User[] = new Array<User>();

  constructor() { }

  ngOnInit() {
    this.userList = [
      { name: 'John' },
      { name: 'Mike' },
    ] as Array<User>;
  }

}
