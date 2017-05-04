import { RouterModule, Routes } from '@angular/router';

//import { AppComponent } from './app.component';
//import { HeaderComponent } from './components/header/header.component';
import { SocialComponent } from './components/social/social.component';
import { NewsfeedComponent } from './components/newsfeed/newsfeed.component';
import { SellComponent } from './components/sell/sell.component';
import { GoLiveComponent } from './components/go-live/go-live.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: NewsfeedComponent },
  /*{ path: 'social', component: SocialComponent }*/
  { path: 'social', component: SocialComponent },
  { path: 'sell', component: SellComponent },
  { path: 'go-live', component: GoLiveComponent }
];

export const routing = RouterModule.forRoot(routes);
