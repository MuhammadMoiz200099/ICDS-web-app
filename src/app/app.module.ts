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
    ContactPageComponent
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
