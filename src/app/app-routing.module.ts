import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceptedPapersComponent } from './components/accepted-papers/accepted-papers.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { DetailedTechnicalProgramComponent } from './components/detailed-technical-program/detailed-technical-program.component';
import { HomeComponent } from './components/home/home.component';
import { InvitedSpeakersComponent } from './components/invited-speakers/invited-speakers.component';
import { OrganizingCommitteeComponent } from './components/organizing-committee/organizing-committee.component';
import { PartnersComponent } from './components/partners/partners.component';
import { PreviewImportantDatesComponent } from './components/preview-important-dates/preview-important-dates.component';
import { ProgramVenueComponent } from './components/program-venue/program-venue.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ScopeAndObjectiveComponent } from './components/scope-and-objective/scope-and-objective.component';
import { TechnicalProgramCommitteeComponent } from './components/technical-program-committee/technical-program-committee.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'important-dates',
        component: PreviewImportantDatesComponent
      },
      {
        path: 'invited-speakers',
        component: InvitedSpeakersComponent
      },
      {
        path: 'accepted-paper',
        component: AcceptedPapersComponent
      },
      {
        path: 'scope-and-objective',
        component: ScopeAndObjectiveComponent
      },
      {
        path: 'detailed-technical-program',
        component: DetailedTechnicalProgramComponent
      },
      {
        path: 'registration',
        component: RegistrationComponent
      },
      {
        path: 'program-venue',
        component: ProgramVenueComponent
      },
      {
        path: 'organizing-committee',
        component: OrganizingCommitteeComponent
      },
      {
        path: 'technical-program-committee',
        component: TechnicalProgramCommitteeComponent
      },
      {
        path: 'partners',
        component: PartnersComponent
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
