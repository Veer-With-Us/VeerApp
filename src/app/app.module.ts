import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from 'clarity-angular';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HeaderComponent } from './components/header/header.component';
import { SocialComponent } from './components/social/social.component';
import { NewsfeedComponent } from './components/newsfeed/newsfeed.component';
import { ComposeComponent } from './components/social/compose.component';
import { routing } from './app.routing';

import { NewsApiService } from './components/newsfeed/news-api.service';
import { ShaService } from './services/sha.service';
import { OAuthService } from './services/oauth.service';
import { AuthorizedRequestService } from './services/authorized-request.service';
import { TwitterService } from './services/twitter.service';
import { InboxService } from './services/inbox.service';
import { BloombergService } from './services/bloomberg.service';
import { RedditService } from './services/reddit.service';

import { MaxLengthPipe } from './pipes/max-length.pipe';

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
    ComposeComponent
  ],
  providers: [
    NewsApiService,
    ShaService,
    OAuthService,
    AuthorizedRequestService,
    TwitterService,
    InboxService,
    BloombergService,
    RedditService
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
