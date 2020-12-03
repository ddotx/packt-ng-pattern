import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SectionComponent } from './about/section/section.component';
import { UsersResolverService } from './users-resolver.service';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { UserResolverService } from './user-resolver.service';
import { LoginComponent } from './login/login.component';
import { AppGuard } from './app.guard';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      {
        path: 'section',
        component: SectionComponent
      }
    ]
  },
  {
    path: 'users',
    component: UsersComponent,
    resolve: { users: UsersResolverService },
    canActivate: [AppGuard],
    canActivateChild: [AppGuard],
    canDeactivate: [AppGuard],
    children: [
      {
        path: ':id',
        component: UserComponent,
        resolve: { user: UserResolverService }
      }
    ]
  },
  // {
  //   path: 'users/:id',
  //   component: UserComponent,
  //   resolve: { user: UserResolverService }
  // },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule),
    canLoad: [AppGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
