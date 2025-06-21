import { NewsService } from './../../../shared/service/News/news.service';
import { Component, OnInit } from '@angular/core';
import { Article, News } from '../../../shared/interface/News';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent implements OnInit{
  isLoading:boolean=false;
  Newslist!:Article[];

  constructor(private _NewsService:NewsService) { }
  ngOnInit(): void {
    if( typeof localStorage!= 'undefined')
   localStorage.setItem('currentpage','/news')

  this.getallproducts();

  }


    getallproducts()
  {
  this.isLoading=true;
    this._NewsService.getNews().subscribe({
      next : res =>{
        this.Newslist = res.articles;
        console.log(this.Newslist)
        this.isLoading=false;
      },
      error : err =>{
        console.log(err);
        this.isLoading=false;
      }
    })

  }
}
