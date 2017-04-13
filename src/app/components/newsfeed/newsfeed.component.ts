import { Component, OnInit } from '@angular/core';
import { NewsApiService } from './news-api.service';

@Component({
  selector: `veer-newsfeed`,
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})

export class NewsfeedComponent implements OnInit {
  private subNews: any; 
  protected news: any = [];
  constructor(private newsAPIService: NewsApiService) {}

  ngOnInit() {
    this.loadNews();
  } 

  private loadNews() {
    this.subNews = this.newsAPIService.getNews().subscribe(res => {
      this.news = res;
      console.log(this.news);
    });
  }
}