import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsApiService {
  constructor(private http: Http) {}

  getNews() {
    return this.http.get('http://hn.algolia.com/api/v1/search_by_date?query=startup&tags=story')
      .map((res) => res.json());
  }
}