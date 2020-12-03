import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((resolverData) => {
      console.warn(resolverData);
      this.users = resolverData.users;
      console.log(this.users);
    });
  }

  confirm() {
    const confirmation = window.confirm('Are you sure to navigate away?'); // ? ==> return as boolean
    return of(confirmation);
  }

}
