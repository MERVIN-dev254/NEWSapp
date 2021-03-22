import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {
  Articles:Array<any>;
  Sources:Array<any>;

  constructor(private service: NewsService) { }

  ngOnInit(): void {
    //load default articles on init
    this.service.initArticle().subscribe(
      news_art => {
        this.Articles = news_art['articles'];
      }
    )
    //load news sources
    this.service.initSource().subscribe(
      sources => {
        this.Sources = sources['sources']
      }
    )
  }
  searchArticles(source){
    console.log("selected source is: "+source);
    this.service.getArticles(source).subscribe(data => this.Articles = data['articles']);
  }
}
