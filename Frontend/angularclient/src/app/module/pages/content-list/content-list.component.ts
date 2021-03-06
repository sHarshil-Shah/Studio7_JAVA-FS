import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Globals } from 'src/app/global';
import { Content } from 'src/app/model/content';
import { User } from 'src/app/model/user';
import { ContentService } from 'src/app/service/content.service';
import { UserService } from 'src/app/service/user.service';
import { VideoComponent } from '../video/video.component';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  contents: Content[] = [];

  constructor(private contentService: ContentService, private userService: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.contentService.findAll().subscribe(data => {
      this.contents = data;
    });
  }

  openDialog(link: string | undefined): void {
    const dialogRef = this.dialog.open(VideoComponent, {
      // width: '2000px',
      data: { link: 'assets/1.mp4' }
    });

  }



  watchlist(id: Number = 0): void {
    let user: User;
    this.userService.findByEmail(Globals.email).subscribe(result => {
      user = result;
      this.contentService.findById(id).subscribe(content => {

        this.userService.addContent(user, content).subscribe();
      });
    });

  }
}