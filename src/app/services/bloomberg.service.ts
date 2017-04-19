import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BloombergService {
  constructor(private http: Http) {}

  getBloombergHeadlines() {
    return this.http.get('https://newsapi.org/v1/articles?source=bloomberg&sortBy=top&apiKey=4b520347da2d42258bb7e7242c7fb272')
      .map(res => res.json())
      .map((res) => {
        if (res != null) {
          return res;
        }
      });
  }
}