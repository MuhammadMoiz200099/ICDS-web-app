import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgImageSliderModule } from 'ng-image-slider';
import { HeaderBannerComponent } from './components/header-banner/header-banner.component';
import { HeaderNavigationComponent } from './components/header-navigation/header-navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ImportantDatesComponent } from './components/important-dates/important-dates.component';
import { HomeGalleryComponent } from './components/home-gallery/home-gallery.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { PreviewImportantDatesComponent } from './components/preview-important-dates/preview-important-dates.component';
import { ScopeAndObjectiveComponent } from './components/scope-and-objective/scope-and-objective.component';
import { ProgramVenueComponent } from './components/program-venue/program-venue.component';
import { VenueGalleryComponent } from './components/venue-gallery/venue-gallery.component';
import { OrganizingCommitteeComponent } from './components/organizing-committee/organizing-committee.component';
import { InvitedSpeakersComponent } from './components/invited-speakers/invited-speakers.component';
import { AcceptedPapersComponent } from './components/accepted-papers/accepted-papers.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { CallForPaperComponent } from './components/call-for-paper/call-for-paper.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { OversightCommitteeComponent } from './components/oversight-committee/oversight-committee.component';
import { TechnicalCommitteeComponent } from './components/technical-committee/technical-committee.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBannerComponent,
    HeaderNavigationComponent,
    FooterComponent,
    HomeComponent,
    ImportantDatesComponent,
    HomeGalleryComponent,
    ContactPageComponent,
    PreviewImportantDatesComponent,
    ScopeAndObjectiveComponent,
    ProgramVenueComponent,
    VenueGalleryComponent,
    OrganizingCommitteeComponent,
    InvitedSpeakersComponent,
    AcceptedPapersComponent,
    RegistrationComponent,
    CallForPaperComponent,
    TimelineComponent,
    OversightCommitteeComponent,
    TechnicalCommitteeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
