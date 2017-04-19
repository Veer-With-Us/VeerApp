import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RedditService {
  constructor(private http: Http) {}

  getRedditPosts() {
    return this.http.get('https://newsapi.org/v1/articles?source=reddit-r-all&sortBy=top&apiKey=4b520347da2d42258bb7e7242c7fb272')
      .map(res => res.json())
      .map((res) => {
        if (res != null) {
          return res;
        }
      });
  }
}