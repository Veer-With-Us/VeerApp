import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from 'clarity-angular';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { ChartsModule } from 'ng2-charts';
import { CalendarModule } from 'angular-calendar';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HeaderComponent } from './components/header/header.component';
import { SocialComponent } from './components/social/social.component';
import { NewsfeedComponent } from './components/newsfeed/newsfeed.component';
import { ComposeComponent } from './components/social/compose.component';
import { SellComponent } from './components/sell/sell.component';
import { BarChartComponent } from './components/charts/bar-chart.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { CustomerTableComponent } from './components/customers/customers.component';
import { SalesActivityComponent } from './components/sales-activity/sales-activity.component';
import { GoLiveComponent } from './components/go-live/go-live.component';
import { routing } from './app.routing';

import { NewsApiService } from './components/newsfeed/news-api.service';
import { ShaService } from './services/sha.service';
import { OAuthService } from './services/oauth.service';
import { AuthorizedRequestService } from './services/authorized-request.service';
import { TwitterService } from './services/twitter.service';
import { InboxService } from './services/inbox.service';
import { BloombergService } from './services/bloomberg.service';
import { RedditService } from './services/reddit.service';
import { CustomerFeedbackService } from './services/customer-feedback.service';
import { CustomerDataService } from './services/customer-data.service';
import { SalesActivityService } from './services/sales-activity.service';

import { MaxLengthPipe } from './pipes/max-length.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule.forRoot(),
    ModalModule.forRoot(),
    BootstrapModalModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ChartsModule,
    CalendarModule.forRoot(),
    routing
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    WelcomeComponent,
    HeaderComponent,
    SocialComponent,
    NewsfeedComponent,
    MaxLengthPipe,
    ComposeComponent,
    SellComponent,
    BarChartComponent,
    CalendarComponent,
    ReviewsComponent,
    CustomerTableComponent,
    SalesActivityComponent,
    GoLiveComponent,
    CapitalizePipe
  ],
  providers: [
    NewsApiService,
    ShaService,
    OAuthService,
    AuthorizedRequestService,
    TwitterService,
    InboxService,
    BloombergService,
    RedditService,
    CustomerFeedbackService,
    CustomerDataService,
    SalesActivityService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
