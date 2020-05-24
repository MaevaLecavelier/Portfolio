import { Component, OnInit } from '@angular/core';

import { PROJECTS } from '../allProjects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
    projects = PROJECTS
    projectsId = [0,1,2]
    imgUrl = [
        'assets/img/PeiP.jpg',
        'assets/img/Personnel.jpg',
        'assets/img/CAU.jpg'
    ]
    idToGenre = [
        'PeiP',
        'Personnel',
        'CAU - Echange universitaire'
    ]
  constructor() { }

  ngOnInit(): void {
  }


}
