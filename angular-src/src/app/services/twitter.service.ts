import { Injectable } from '@angular/core';
import { Http/*, Headers, Response*/ } from '@angular/http';
// import { Observable } from 'rxjs/Observable';

import { AuthorizedRequestService } from './authorized-request.service';
import { OAuthService, OAuthKey, OAuthToken } from './oauth.service';
import { ShaService } from './sha.service';

@Injectable()
export class TwitterService {
  private authRequest: AuthorizedRequestService;

  constructor(private http: Http) {
    this.authRequest = new AuthorizedRequestService(
      new OAuthService(new ShaService()),
      this.http
    );
  }

  get(url: string, query: any, oauthKey: OAuthKey, oauthToken: OAuthToken) {
    return this.authRequest.get(url, query, oauthKey, oauthToken);
  }

  post(url: string, params: any, oauthKey: OAuthKey, oauthToken: OAuthToken) {
    return this.authRequest.post(url, params, oauthKey, oauthToken);
  }
}