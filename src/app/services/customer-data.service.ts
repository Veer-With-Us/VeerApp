import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerDataService {
  constructor(private http: Http) {}

  generateRandomCustomer() {
    return this.http.get('https://randomuser.me/api/?results=10')
      .map(res => res.json())
      .map((res) => {
        if (res != null) {
          return res;
        }
      });
  }
}