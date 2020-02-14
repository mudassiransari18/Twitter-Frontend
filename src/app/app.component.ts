import { Component } from '@angular/core';
import { TweetService } from "./tweet.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private APICall : TweetService) {}

  Tweets: Array<any>;
  Name: string;

  setGuest(FormValue){
    var req = FormValue;
    this.APICall.getTweets(req).subscribe((x:any)=>{
      if(x.Tweets){
        this.Tweets = x.Tweets;
        this.Name = x.Name;
      }else this.Tweets = [];
    })
  }
}
