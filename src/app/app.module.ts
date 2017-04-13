import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from 'clarity-angular';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HeaderComponent } from './components/header/header.component';
import { SocialComponent } from './components/social/social.component';
import { NewsfeedComponent } from './components/newsfeed/newsfeed.component';
import { routing } from './app.routing';

import { TwitterService } from './components/social/twitter.service';
import { NewsApiService } from './components/newsfeed/news-api.service';

import { MaxLengthPipe } from './pipes/max-length.pipe';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule.forRoot(),
    routing
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    WelcomeComponent,
    HeaderComponent,
    SocialComponent,
    NewsfeedComponent,
    MaxLengthPipe
  ],
  providers: [
    TwitterService,
    NewsApiService
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
