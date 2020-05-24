import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './navbar/navbar.component';
import { CareerpathComponent } from './careerpath/careerpath.component';
import { AboutComponent } from './about/about.component';
import { FormationComponent } from './formation/formation.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { VoyageComponent } from './voyage/voyage.component';
import { ProfilComponent } from './profil/profil.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CareerpathComponent,
    AboutComponent,
    FormationComponent,
    ProjectsComponent,
    SkillsComponent,
    VoyageComponent,
    ProfilComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
