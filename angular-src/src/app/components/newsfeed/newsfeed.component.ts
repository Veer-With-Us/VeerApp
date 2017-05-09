import { Component, OnInit } from '@angular/core';
import { NewsApiService } from './news-api.service';
import { BloombergService } from '../../services/bloomberg.service';

@Component({
  selector: `veer-newsfeed`,
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})

export class NewsfeedComponent implements OnInit {
  private subNews: any; 
  protected news: any = [];
  private subHeadlines: any;
  protected headlines: any = [];
  constructor(
    private newsAPIService: NewsApiService,
    private bloombergService: BloombergService) {}

  ngOnInit() {
    this.loadNews();
    this.loadBusinessInsiderHeadlines();
  } 

  private loadNews() {
    this.subNews = this.newsAPIService.getNews().subscribe(res => {
      this.news = res;
      console.log(this.news);
    });
  }

  private loadBusinessInsiderHeadlines() {
    this.subHeadlines = this.bloombergService.getBloombergHeadlines().subscribe(res => {
      this.headlines = res;
      console.log(this.headlines);
    })
  }
}