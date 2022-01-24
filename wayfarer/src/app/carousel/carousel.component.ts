import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {

  showNavigationArrows = true;
  showNavigationIndicators = true;
  path: string = '../../assets/images/';
  images = [`${this.path}/gibraltar-monkey.png`, `${this.path}/golden-gate.png`, `${this.path}/london-eye.png`];

  constructor() {}

  ngOnInit(): void {
  }

}
