import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  redirectURL: string;
  isLogin: boolean;
  isAdmin: boolean;

  constructor() { }
}
