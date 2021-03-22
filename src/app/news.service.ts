import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  api_key = "your_newsAPI_apikey_here";

  constructor(private http:HttpClient) { }

  // initialize news sources
 initSource(){
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key);
 }
//  initialize articles
 initArticle(){
  return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key);
 }
//  retrieve single article
 getArticles(source: String){
  return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
 }
}
