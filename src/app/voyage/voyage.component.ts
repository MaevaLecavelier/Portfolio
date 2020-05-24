import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voyage',
  templateUrl: './voyage.component.html',
  styleUrls: ['./voyage.component.css']
})
export class VoyageComponent implements OnInit {
    images = [
        "assets/img/Allos.jpg",
        "assets/img/Londres.jpg",
        "assets/img/Seoul.jpg",
    ];
    constructor() { }

    ngOnInit(): void {
    }

}
