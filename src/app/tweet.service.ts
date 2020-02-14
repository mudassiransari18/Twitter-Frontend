import { Injectable } from '@angular/core';
import { Tweet } from './tweets';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor(private Http : HttpClient) { }

  getTweets(req: any){
    return this.Http.post('http://localhost:3600/tweets',req).pipe(
      map((res : Tweet) => res.result[0])
    )
  }

}
