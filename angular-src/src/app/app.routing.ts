import { RouterModule, Routes } from '@angular/router';

//import { AppComponent } from './app.component';
//import { HeaderComponent } from './components/header/header.component';
import { SocialComponent } from './components/social/social.component';
import { NewsfeedComponent } from './components/newsfeed/newsfeed.component';
import { SellComponent } from './components/sell/sell.component';
import { GoLiveComponent } from './components/go-live/go-live.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: NewsfeedComponent },
  /*{ path: 'social', component: SocialComponent }*/
  { path: 'social', component: SocialComponent },
  { path: 'sell', component: SellComponent },
  { path: 'go-live', component: GoLiveComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

export const routing = RouterModule.forRoot(routes);
