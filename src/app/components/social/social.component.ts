import { Component, OnInit } from '@angular/core';
import { TwitterModel } from '../../models/twitter.model';
import { TwitterService } from '../../services/twitter.service';
//import { InboxService } from '../../services/inbox.service';
import { InboxModel } from '../../models/inbox.model';

//declare var moment: any;

@Component({
  selector: 'veer-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})

export class SocialComponent implements OnInit { 
  name: string = 'Ethan Durham';
  location: string = 'San Francisco, CA';
  bio: string = 'Running the biggest lemonade stand in the heart of SF';
  result: string = '';
  messages: InboxModel = new InboxModel();
  //public mostRecentTime: Date = moment().format();
  protected tweets: any = [];
  protected twitterModel: TwitterModel = new TwitterModel();

  constructor(
    private twitterService: TwitterService) {}


  ngOnInit() {
    this.getHomeTimeline();
    //this.loadInboxMessages();
  }

  loadInboxMessages() {
    //this.messages = this.inbox;
  }

  getHomeTimeline() {
      this.twitterService.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=elonmusk',
      {
        count: 5
      },
      {
        consumerKey: this.twitterModel.consumerKey,
        consumerSecret: this.twitterModel.consumerSecret
      },
      {
        token: this.twitterModel.token,
        tokenSecret: this.twitterModel.tokenSecret
      }).subscribe((res) => {
        this.result = res.json().map(tweet => tweet.text);
      });
  }

}