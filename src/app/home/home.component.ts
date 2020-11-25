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

  constructor(private _TrendingService : TrendingService) {
    _TrendingService.getTrendingRepos().subscribe((data) => {
      this.repos = data.items;
      console.log(this.repos)
    })
   }

  ngOnInit(): void {
  }

}
