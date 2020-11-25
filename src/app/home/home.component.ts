import { Component, OnInit } from '@angular/core';
import {TrendingService} from '../trending.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  repos = [];
  pageNum = 1 ; 

  constructor(private _TrendingService : TrendingService) {
    _TrendingService.getTrendingRepos(this.pageNum).subscribe((data) => {
      this.repos = data.items;
      console.log(this.repos)
    })
   }

   onScroll(){
     this.pageNum += 1;
    this._TrendingService.getTrendingRepos(this.pageNum).subscribe((data) => {
      const newRepos = data.items ;
      this.repos = this.repos.concat(newRepos);
    })
   }

  ngOnInit(): void {
  }

}
