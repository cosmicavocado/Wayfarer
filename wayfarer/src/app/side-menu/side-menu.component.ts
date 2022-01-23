import { Component, OnInit } from '@angular/core';
import { CITIES } from '../cities/cities';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  cities = CITIES;
  
  constructor() { }

  ngOnInit(): void {
  }

}
