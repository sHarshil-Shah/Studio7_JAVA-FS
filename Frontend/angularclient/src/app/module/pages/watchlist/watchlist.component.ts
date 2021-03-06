import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/global';
import { Content } from 'src/app/model/content';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {


  watchlist: Content[] | undefined;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.findByEmail(Globals.email).subscribe(user => {
      console.log(user.watchList);
      this.watchlist = user.watchList;
    });
  }
}
