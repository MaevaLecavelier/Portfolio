import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
    mail = "";
    constructor() { }

    ngOnInit(): void {
    }

    public open() {
        this.mail="maeva.lecavelier@etu.unice.fr";
    }


}
