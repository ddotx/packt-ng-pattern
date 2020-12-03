import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild, CanDeactivate, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { UsersComponent } from './users/users.component';

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate, CanActivateChild, CanDeactivate<UsersComponent>, CanLoad {

  constructor(
    private appService: AppService,
    private router: Router) {}

  // * For lazy load module
  canLoad(route: Route) {
    console.log(route);
    return this.checkLogin(route.path);
  }

  canDeactivate(component: UsersComponent) {
    return component.confirm();
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const url = state.url;
    return this.checkLogin(url);
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(next, state) && this.appService.isAdmin;
  }

  private checkLogin(url: string) {
    if (this.appService.isLogin) {
      return true;
    }
    // * to login page and then navigate back to destination
    this.appService.redirectURL = url;
    this.router.navigate(['/login']);
  }

}
