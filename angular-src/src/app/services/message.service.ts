import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MessageService {
  isDev: Boolean;
  message: any;
  
  constructor(private http: Http) {
    this.isDev = true;      // change to false in production
  }

  postMessage(message) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let ep = this.prepEndpoint('messages/post');
    return this.http.post(ep, message, {headers: headers})
      .map(res => res.json());
  }

  prepEndpoint(ep) {
    if (this.isDev) {
      return ep;
    } else {
      return 'http://localhost:3000' + ep;
    }
  }
}