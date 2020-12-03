import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'packt-ng-pattern';

  constructor(private router: Router) {}

  routeToAbout() {
    // this.router.navigate(['/about'], id);
    // this.router.navigate(['/about'],
    // { queryParams: {name: 'rin'}});
    this.router.navigate(['/about']);
  }
}
