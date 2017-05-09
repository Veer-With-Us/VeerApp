import { Injectable } from '@angular/core';
import { InboxModel } from '../models/inbox.model';
import 'rxjs/add/operator/map';

//declare var moment: any;

@Injectable()
export class InboxService {
  public inboxModel: InboxModel = new InboxModel();

  getInbox() {
    //
  }
}

/*var inbox = [
    {
      userImage: '',
      name: 'Luke Skywalker',
      message: 'Will catch the waves in Santa Cruz, waiting for my ride to the beach now.',
      time: moment().format('MM-DD-YYYY')
    },
    {
      userImage: '',
      name: 'Trinity, Neo, & Morpheus',
      message: 'Thx guys, that was fun!',
      time: moment().format('MM-DD-YYYY')
    },
    {
      userImage: '',
      name: 'Neo',
      message: 'Welcome to reality',
      time: moment().format('MM-DD-YYYY')
    },
    {
      userImage: '',
      name: 'Sarah Connor',
      message: 'The future is now',
      time: moment().format('MM-DD-YYYY')
    }
  ];*/