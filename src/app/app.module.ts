import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { CareerpathComponent } from './careerpath/careerpath.component';
import { AboutComponent } from './about/about.component';
import { FormationComponent } from './formation/formation.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { VoyageComponent } from './voyage/voyage.component';
import { ProfilComponent } from './profil/profil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxCarouselModule } from 'igniteui-angular';
import { CarouselComponent } from './carousel/carousel.component';

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
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
