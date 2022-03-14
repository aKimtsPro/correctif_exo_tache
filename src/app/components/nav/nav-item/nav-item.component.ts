import { Component, Input, OnInit } from '@angular/core';
import { NavItem } from 'src/app/models/route.model';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {

  @Input()
  route!: NavItem

  constructor() { }

  ngOnInit(): void {
  }

}
