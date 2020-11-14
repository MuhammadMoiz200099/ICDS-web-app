import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderBannerComponent } from './components/header-banner/header-banner.component';
import { HeaderNavigationComponent } from './components/header-navigation/header-navigation.component';
import { BaselineLayoutComponent } from './components/baseline-layout/baseline-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ImportantDatesComponent } from './components/important-dates/important-dates.component';
import { HomeGalleryComponent } from './components/home-gallery/home-gallery.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { PreviewImportantDatesComponent } from './components/preview-important-dates/preview-important-dates.component';
import { ScopeAndObjectiveComponent } from './components/scope-and-objective/scope-and-objective.component';
import { InformationCardComponent } from './components/information-card/information-card.component';
import { ProgramVenueComponent } from './components/program-venue/program-venue.component';
import { VenueGalleryComponent } from './components/venue-gallery/venue-gallery.component';
import { DetailedTechnicalProgramComponent } from './components/detailed-technical-program/detailed-technical-program.component';
import { OrganizingCommitteeComponent } from './components/organizing-committee/organizing-committee.component';
import { TechnicalProgramCommitteeComponent } from './components/technical-program-committee/technical-program-committee.component';
import { InvitedSpeakersComponent } from './components/invited-speakers/invited-speakers.component';
import { AcceptedPapersComponent } from './components/accepted-papers/accepted-papers.component';
import { PartnersComponent } from './components/partners/partners.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { CallForPaperComponent } from './components/call-for-paper/call-for-paper.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBannerComponent,
    HeaderNavigationComponent,
    BaselineLayoutComponent,
    FooterComponent,
    HomeComponent,
    ImportantDatesComponent,
    HomeGalleryComponent,
    ContactPageComponent,
    PreviewImportantDatesComponent,
    ScopeAndObjectiveComponent,
    InformationCardComponent,
    ProgramVenueComponent,
    VenueGalleryComponent,
    DetailedTechnicalProgramComponent,
    OrganizingCommitteeComponent,
    TechnicalProgramCommitteeComponent,
    InvitedSpeakersComponent,
    AcceptedPapersComponent,
    PartnersComponent,
    RegistrationComponent,
    CallForPaperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
