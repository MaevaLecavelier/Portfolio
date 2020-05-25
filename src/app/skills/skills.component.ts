import { Component, OnInit } from '@angular/core';

import { SKILLS } from '../skills';
import { ITSKILLS } from '../itskills';
import { LANGS } from '../lang';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
    skills = SKILLS;
    itskills = ITSKILLS;
    lang = LANGS;
    constructor() { }

    ngOnInit(): void {
    }

}
