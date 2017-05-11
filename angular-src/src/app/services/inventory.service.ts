import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class InventoryService {
  inventory: any;
  isDev: Boolean;

  constructor(private http: Http) {
    this.isDev = true;    // change to false in production
  }

  postInventory(inventory) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let ep = this.prepEndpoint('inventory/add');
    return this.http.post(ep, inventory, {headers: headers})
      .map(res => res.json());
  }

  prepEndpoint(ep) {
    if (this.isDev) {
      return ep;
    } else {
      return 'http://localhost:3000/' + ep;
    }
  }
}