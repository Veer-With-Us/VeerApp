import { Component } from '@angular/core';
//import { TwitterService } from './twitter.service';
import { TwitterModel } from '../../models/twitter.model';

@Component({
  selector: 'veer-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})

export class SocialComponent { 
  name: string = 'Ethan Durham';
  location: string = 'San Francisco, CA';
  bio: string = 'Running the biggest lemonade stand in the heart of SF';
  result: string = '';
  protected tweets: any = [];
  //private subTweets: any;
  protected twitterModel: TwitterModel = new TwitterModel();

  //constructor(private twitterService: TwitterService) {}

  /*getElonTweets() {
    this.subTweets = this.twitterService.searchElonTwitter().subscribe(res => {
      this.tweets = res.rows;
    });
  }*/
}