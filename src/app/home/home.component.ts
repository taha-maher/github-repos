import { Component, OnInit} from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  repos = [];    // empty array to recieve repos
  pageNum = 1;   // page number to be fetched
  showError = false;  // boolean in case of error to show error modal

  constructor(private _TrendingService: TrendingService) {   
    // fetching repos and storing them in an array to be displayed 
    _TrendingService.getTrendingRepos(this.pageNum).subscribe(
      data => {
        this.repos = data.items;
      },
      error => {
        this.handleError();
      }
    );
  }


  // using ngx-infinite-scroll this fn will be called every time the user scrolls to the end of the page
  onScroll() {
    this.pageNum += 1;
    this._TrendingService.getTrendingRepos(this.pageNum).subscribe(
      data => {
        const newRepos = data.items;
        this.repos = this.repos.concat(newRepos);
      },
      error => {
        this.handleError();
      }
    );
  }


  handleError() {
    this.showError = true;
  }

  reload(){
    location.reload();
  }

  ngOnInit(): void {
  }

}
