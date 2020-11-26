import { Component, OnInit} from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  repos = [];
  pageNum = 1;
  showError = false;

  constructor(private _TrendingService: TrendingService) {
    _TrendingService.getTrendingRepos(this.pageNum).subscribe(
      data => {
        this.repos = data.items;
      },
      error => {
        this.handleError();
      }
    );
  }


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
