import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
    public slides =
      [
          {
            src: "./assets/img/Allos.jpg"
          },
          {
            src: "./assets/img/Londres.jpg"
          },
          {
            src: "./assets/img/Seoul.jpg"
          }
      ];

  constructor() { }

  ngOnInit(): void {
  }

}
