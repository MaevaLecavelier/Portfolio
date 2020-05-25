import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    public href: string = "";
    public fragment: number = 0;

  constructor( private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
      this.fragment = +this.route.snapshot.paramMap.get('fragment');
      this.href = this.router.url;
  }

  getFragment(): void {
      this.fragment = +this.route.snapshot.paramMap.get('fragment');
  }

  getRoute(): void{
      this.href = this.router.url;
  }


}
