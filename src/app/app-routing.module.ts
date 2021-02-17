import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceptedPapersComponent } from './components/accepted-papers/accepted-papers.component';
import { CallForPaperComponent } from './components/call-for-paper/call-for-paper.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { HomeGalleryComponent } from './components/home-gallery/home-gallery.component';
import { HomeComponent } from './components/home/home.component';
import { InvitedSpeakersComponent } from './components/invited-speakers/invited-speakers.component';
import { OrganizingCommitteeComponent } from './components/organizing-committee/organizing-committee.component';
import { OversightCommitteeComponent } from './components/oversight-committee/oversight-committee.component';
import { PreviewImportantDatesComponent } from './components/preview-important-dates/preview-important-dates.component';
import { ProgramVenueComponent } from './components/program-venue/program-venue.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TechnicalCommitteeComponent } from './components/technical-committee/technical-committee.component';
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
        path: 'programs',
        component: PreviewImportantDatesComponent
      },
      {
        path: 'call-for-paper',
        component: CallForPaperComponent
      },
      {
        path: 'programs/invited-speakers',
        component: InvitedSpeakersComponent
      },
      {
        path: 'programs/accepted-paper',
        component: AcceptedPapersComponent
      },
      {
        path: 'scope-and-objective',
        component: ScopeAndObjectiveComponent
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
        path: 'oversight-committee',
        component: OversightCommitteeComponent
      },
      {
        path: 'technical-committee',
        component: TechnicalCommitteeComponent
      },
      {
        path: 'contact',
        component: ContactPageComponent
      },
      {
        path: 'gallery',
        component: HomeGalleryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
