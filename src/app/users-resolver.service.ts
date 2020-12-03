import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersResolverService implements Resolve<User[]> {

  constructor(private http: HttpClient) { }

  resolve() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
