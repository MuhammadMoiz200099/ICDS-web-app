import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { HomeComponent } from './components/home/home.component';
import { PreviewImportantDatesComponent } from './components/preview-important-dates/preview-important-dates.component';
import { ProgramVenueComponent } from './components/program-venue/program-venue.component';
import { ScopeAndObjectiveComponent } from './components/scope-and-objective/scope-and-objective.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'important-dates',
        component: PreviewImportantDatesComponent
      },
      {
        path: 'scope-and-objective',
        component: ScopeAndObjectiveComponent
      },
      {
        path: 'program-venue',
        component: ProgramVenueComponent
      },
      {
        path: 'contact',
        component: ContactPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
