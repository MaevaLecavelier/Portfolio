import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { CareerpathComponent } from './careerpath/careerpath.component';


const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'about/:fragment', component: AboutComponent},
  { path: 'careerpath', component: CareerpathComponent },
  { path: 'careerpath/:fragment', component: CareerpathComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
