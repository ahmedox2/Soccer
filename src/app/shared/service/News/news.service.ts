import { Injectable } from '@angular/core';
import { News } from '../../interface/News';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _HttpClient:HttpClient) { }
    getNews():Observable<News>
  {
    return this._HttpClient.get<News>(`https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=7f6e437c2b964dfe99fab9bd1400d03e`
    //  ,{headers:this.userTokenHeader}
    );
  }
}
