import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
// import { TwitterModel } from '../../models/twitter.model';

@Injectable()
export class TwitterService {
  //searchQuery: string = "";
  tweetData: any;
  constructor(private http: Http) { }

  getAuthorization() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    this.http.post('https://api.twitter.com/oauth/authorize', { headers: headers })
      .map(res => res.json())
      .map((res) => {
        if (res != null) {
          return res;
        }
      });
  }

  searchElonTwitter() {
    var headers = new Headers();

    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    this.http.get('https://api.twitter.com/1.1/search/tweets.json?q=%40elonmusk', { headers: headers })
      .map(res => res.json())
      .map((res) => {
        if (res != null) {
          return res;
        }
      });
  }
}