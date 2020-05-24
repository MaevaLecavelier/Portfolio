import { Component, OnInit } from '@angular/core';

import { SCHOOLS } from '../schools';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})

export class FormationComponent implements OnInit {
    schools = SCHOOLS
    constructor() { }

    ngOnInit(): void {
    }

}
