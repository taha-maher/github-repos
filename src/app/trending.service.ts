import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor(private _HttpClient:HttpClient) { }

  getTrendingRepos():Observable<any>{
    return this._HttpClient.get("https://api.github.com/search/repositories?q=created:>2020-10-25&sort=stars&order=desc");
  }
}
