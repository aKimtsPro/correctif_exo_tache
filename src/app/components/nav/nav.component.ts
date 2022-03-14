import { Component, OnInit } from '@angular/core';
import { NavItem } from 'src/app/models/route.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  routes: NavItem[] = [
    {
      name: 'accueil',
      path: 'accueil'
    },
    {
      name: 'tache',
      path: 'tache'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
