import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    console.log(this.router);
    console.log(this.activatedRoute.snapshot.queryParamMap);

    this.router.events.pipe(
      filter(evt => evt instanceof NavigationEnd)
    )
    .subscribe(evt => console.log(evt));
  }

}
